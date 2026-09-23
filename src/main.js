import "./style.css";

const MOODS = [
  { id: "calm", name: "平静", emoji: "🌿", score: 4 },
  { id: "happy", name: "开心", emoji: "☀️", score: 5 },
  { id: "anxious", name: "焦虑", emoji: "🌊", score: 2 },
  { id: "tired", name: "疲惫", emoji: "🌙", score: 2 },
  { id: "sad", name: "低落", emoji: "🌧️", score: 1 },
  { id: "angry", name: "烦躁", emoji: "🔥", score: 1 },
  { id: "lonely", name: "孤独", emoji: "🍂", score: 2 },
  { id: "hopeful", name: "期待", emoji: "🌱", score: 4 },
  { id: "stressed", name: "压力", emoji: "⚡", score: 1 },
  { id: "grateful", name: "感恩", emoji: "🍃", score: 5 },
];

const TRIGGERS = [
  "学业 deadline", "职场会议", "人际关系", "睡眠不足", "社交比较",
  "家庭关系", "身体状态", "财务压力", "自我苛责", "突发变化",
];

const CARE = {
  anxious: [
    { type: "冥想", title: "4-7-8 呼吸锚定", desc: "吸气4秒、屏息7秒、呼气8秒，重复4轮，让神经系统慢下来。", mins: 5, breathe: "478" },
    { type: "音乐", title: "低频白噪音清单", desc: "听雨声或轻柔钢琴，把注意力从担忧回路里轻轻拉开。", mins: 10 },
    { type: "运动", title: "快走释放紧张", desc: "出门快走10分钟，同步数呼吸，把身体里的紧张带走。", mins: 10 },
  ],
  tired: [
    { type: "冥想", title: "身体扫描小憩", desc: "从脚趾到头顶依次放松，允许自己短暂停机充电。", mins: 8 },
    { type: "音乐", title: "柔和氛围曲", desc: "选无歌词的氛围乐，降低信息输入，给大脑留白。", mins: 15 },
    { type: "运动", title: "拉伸唤醒", desc: "肩颈与髋部轻柔拉伸，而不是高强度消耗。", mins: 7 },
  ],
  sad: [
    { type: "冥想", title: "自我关怀短句", desc: "把手放胸口，重复：我现在很难，但这会过去。", mins: 5 },
    { type: "音乐", title: "温暖民谣", desc: "听一首熟悉而温柔的歌，允许情绪被看见。", mins: 6 },
    { type: "运动", title: "晒太阳散步", desc: "走到有光的地方慢慢走，让身体重新接上外界。", mins: 12 },
  ],
  angry: [
    { type: "冥想", title: "命名情绪", desc: "大声说出：我感到烦躁，因为……。命名能降低强度。", mins: 4 },
    { type: "音乐", title: "节奏释放", desc: "先听有力量的鼓点，再切到舒缓曲，完成情绪过渡。", mins: 10 },
    { type: "运动", title: "高强度短冲", desc: "原地开合跳或快跑2分钟，把怒气转化为动能。", mins: 5 },
  ],
  stressed: [
    { type: "冥想", title: "方块呼吸", desc: "吸气4、屏息4、呼气4、屏息4，循环重置节奏感。", mins: 5, breathe: "box" },
    { type: "音乐", title: "专注深工作曲", desc: "Lo-fi 或自然声，帮你把压力拆成一个可执行小任务。", mins: 20 },
    { type: "运动", title: "方块呼吸行走", desc: "边走边做4-4-4-4呼吸，重新拿回掌控感。", mins: 8 },
  ],
  lonely: [
    { type: "冥想", title: "写信给自己", desc: "写下你希望朋友对你说的话，再读给自己听。", mins: 8 },
    { type: "音乐", title: "陪伴向歌单", desc: "选你会跟朋友一起听的歌，制造温柔的连接感。", mins: 12 },
    { type: "运动", title: "公共空间漫步", desc: "去公园或咖啡馆走一圈，感受人群的背景温度。", mins: 15 },
  ],
  default: [
    { type: "冥想", title: "今日三件好事", desc: "写下三件微小的好事，训练大脑看见资源。", mins: 5 },
    { type: "音乐", title: "清晨清透歌单", desc: "轻快但不刺激的节奏，帮你稳住当下状态。", mins: 10 },
    { type: "运动", title: "伸展+深呼吸", desc: "站立伸展配合深呼吸，延续这份好状态。", mins: 6, breathe: "calm" },
  ],
};

const BREATHE_MODES = {
  "478": {
    name: "4-7-8 呼吸",
    desc: "适合焦虑、睡前放松",
    phases: [
      { id: "inhale", label: "吸气", seconds: 4 },
      { id: "hold", label: "屏息", seconds: 7 },
      { id: "exhale", label: "呼气", seconds: 8 },
    ],
    rounds: 4,
  },
  box: {
    name: "方块呼吸",
    desc: "适合压力大、需要稳住节奏",
    phases: [
      { id: "inhale", label: "吸气", seconds: 4 },
      { id: "hold", label: "屏息", seconds: 4 },
      { id: "exhale", label: "呼气", seconds: 4 },
      { id: "hold", label: "再屏息", seconds: 4 },
    ],
    rounds: 4,
  },
  calm: {
    name: "平静呼吸",
    desc: "适合日常微调、恢复能量",
    phases: [
      { id: "inhale", label: "吸气", seconds: 4 },
      { id: "exhale", label: "呼气", seconds: 6 },
    ],
    rounds: 6,
  },
};

const STORAGE_KEY = "moodcare-entries-v1";
const seedEntries = () => {
  const now = Date.now();
  return [
    { id: "s1", moodId: "anxious", intensity: 7, triggers: ["学业 deadline", "睡眠不足"], note: "论文改到半夜，早上起来心跳有点快。", createdAt: now - 86400000 * 5 },
    { id: "s2", moodId: "stressed", intensity: 8, triggers: ["职场会议", "自我苛责"], note: "汇报被追问，总觉得自己准备不够。", createdAt: now - 86400000 * 4 },
    { id: "s3", moodId: "tired", intensity: 6, triggers: ["职场会议", "身体状态"], note: "连续开会，脑子转不动。", createdAt: now - 86400000 * 3 },
    { id: "s4", moodId: "lonely", intensity: 5, triggers: ["社交比较", "人际关系"], note: "刷到同学升职，忽然有点空。", createdAt: now - 86400000 * 2 },
    { id: "s5", moodId: "grateful", intensity: 8, triggers: ["人际关系"], note: "朋友发来鼓励，心里暖了一下。", createdAt: now - 86400000 },
    { id: "s6", moodId: "hopeful", intensity: 7, triggers: ["学业 deadline"], note: "拆完一个小任务，感觉又能往前走一点。", createdAt: now - 3600000 * 5 },
  ];
};

const state = {
  view: "home",
  entries: loadEntries(),
  draft: { moodId: "calm", intensity: 5, triggers: [], note: "" },
  toast: "",
  breathe: {
    mode: "478",
    running: false,
    phaseIndex: 0,
    round: 1,
    secondsLeft: 4,
    phaseClass: "idle",
  },
};

let breatheTimer = null;
let toastTimer = null;

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = seedEntries();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw);
  } catch {
    return seedEntries();
  }
}

function saveEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries));
}

function moodById(id) {
  return MOODS.find((m) => m.id === id) || MOODS[0];
}

function formatTime(ts) {
  const d = new Date(ts);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  if (sameDay) return `今天 ${hh}:${mm}`;
  return `${d.getMonth() + 1}/${d.getDate()} ${hh}:${mm}`;
}

function formatDateFull(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function showToast(msg) {
  state.toast = msg;
  render();
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = "";
    const el = document.querySelector(".toast");
    if (el) el.classList.remove("show");
  }, 1800);
}

function analyzeTriggers(entries) {
  const map = {};
  entries.forEach((e) => {
    e.triggers.forEach((t) => {
      map[t] = map[t] || { count: 0, intensity: 0, moods: {} };
      map[t].count += 1;
      map[t].intensity += e.intensity;
      map[t].moods[e.moodId] = (map[t].moods[e.moodId] || 0) + 1;
    });
  });
  return Object.entries(map)
    .map(([name, v]) => ({
      name,
      count: v.count,
      avg: +(v.intensity / v.count).toFixed(1),
      topMood: Object.entries(v.moods).sort((a, b) => b[1] - a[1])[0]?.[0],
    }))
    .sort((a, b) => b.count - a.count || b.avg - a.avg);
}

function weekTrend(entries) {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - i);
    const key = d.toDateString();
    const dayEntries = entries.filter((e) => new Date(e.createdAt).toDateString() === key);
    const avg = dayEntries.length
      ? dayEntries.reduce((s, e) => s + moodById(e.moodId).score, 0) / dayEntries.length
      : 0;
    days.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, avg, count: dayEntries.length });
  }
  return days;
}

function entriesInLastDays(days = 7) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));
  return state.entries.filter((e) => e.createdAt >= start.getTime());
}

function buildWeeklyReport() {
  const week = entriesInLastDays(7);
  const triggers = analyzeTriggers(week);
  const moodCount = {};
  week.forEach((e) => {
    moodCount[e.moodId] = (moodCount[e.moodId] || 0) + 1;
  });
  const moodRank = Object.entries(moodCount)
    .map(([id, count]) => ({ ...moodById(id), count }))
    .sort((a, b) => b.count - a.count);
  const avgIntensity = week.length
    ? +(week.reduce((s, e) => s + e.intensity, 0) / week.length).toFixed(1)
    : 0;
  const avgScore = week.length
    ? +(week.reduce((s, e) => s + moodById(e.moodId).score, 0) / week.length).toFixed(1)
    : 0;
  const topMood = moodRank[0] || null;
  const topTrigger = triggers[0] || null;
  const highDays = week.filter((e) => e.intensity >= 7).length;

  let headline = "这一周，你开始更认真地看见自己了。";
  let body = [];
  if (!week.length) {
    headline = "这一周还没有记录。";
    body = ["从一次 30 秒签到开始，周报会慢慢长出你的情绪地图。"];
  } else {
    if (avgScore >= 3.5) headline = "这一周整体偏稳，值得肯定自己的小坚持。";
    else if (avgScore <= 2.2) headline = "这一周情绪波动偏大，你已经很努力了。";
    else headline = "这一周有起伏，也有被你接住的片刻。";

    body.push(`你共记录了 ${week.length} 次情绪，平均强度 ${avgIntensity}/10。`);
    if (topMood) body.push(`出现最多的是「${topMood.emoji} ${topMood.name}」（${topMood.count} 次）。`);
    if (topTrigger) {
      body.push(`最常出现的触发因素是「${topTrigger.name}」，平均强度 ${topTrigger.avg}。`);
    }
    if (highDays >= 2) {
      body.push(`有 ${highDays} 次高强度体验（≥7）。下次遇到类似场景，可以先做一轮呼吸再回应。`);
    } else {
      body.push("高强度时刻不算多，说明你正在练习把情绪放下来再行动。");
    }
    body.push("下周可以试着：每天至少记录一次，并完成一次呼吸练习。");
  }

  return { week, triggers, moodRank, avgIntensity, avgScore, topMood, topTrigger, headline, body };
}

function careFor(moodId) {
  return CARE[moodId] || CARE.default;
}

function stopBreathing() {
  if (breatheTimer) {
    clearInterval(breatheTimer);
    breatheTimer = null;
  }
  state.breathe.running = false;
  state.breathe.phaseClass = "idle";
}

function startBreathing(modeId) {
  stopBreathing();
  const mode = BREATHE_MODES[modeId] || BREATHE_MODES["478"];
  state.breathe.mode = modeId;
  state.breathe.running = true;
  state.breathe.phaseIndex = 0;
  state.breathe.round = 1;
  const first = mode.phases[0];
  state.breathe.secondsLeft = first.seconds;
  state.breathe.phaseClass = first.id;
  render();

  breatheTimer = setInterval(() => {
    const currentMode = BREATHE_MODES[state.breathe.mode];
    if (!state.breathe.running || !currentMode) return stopBreathing();

    if (state.breathe.secondsLeft > 1) {
      state.breathe.secondsLeft -= 1;
      updateBreatheUI();
      return;
    }

    const nextIndex = state.breathe.phaseIndex + 1;
    if (nextIndex < currentMode.phases.length) {
      state.breathe.phaseIndex = nextIndex;
      const phase = currentMode.phases[nextIndex];
      state.breathe.secondsLeft = phase.seconds;
      state.breathe.phaseClass = phase.id;
      updateBreatheUI(true);
      return;
    }

    if (state.breathe.round < currentMode.rounds) {
      state.breathe.round += 1;
      state.breathe.phaseIndex = 0;
      const phase = currentMode.phases[0];
      state.breathe.secondsLeft = phase.seconds;
      state.breathe.phaseClass = phase.id;
      updateBreatheUI(true);
      return;
    }

    stopBreathing();
    showToast("呼吸练习完成，你做得很好");
    setView("care");
  }, 1000);
}

function updateBreatheUI(restartAnim = false) {
  const mode = BREATHE_MODES[state.breathe.mode];
  const phase = mode.phases[state.breathe.phaseIndex];
  const ring = document.querySelector("[data-breathe-ring]");
  const label = document.querySelector("[data-breathe-label]");
  const sub = document.querySelector("[data-breathe-sub]");
  const roundEl = document.querySelector("[data-breathe-round]");
  const leftEl = document.querySelector("[data-breathe-left]");
  if (!ring || !phase) return;

  if (restartAnim) {
    ring.className = "breathe-ring idle";
    void ring.offsetWidth;
    ring.style.setProperty("--phase-ms", `${phase.seconds}s`);
    ring.className = `breathe-ring ${phase.id}`;
  }
  if (label) label.textContent = phase.label;
  if (sub) sub.textContent = `${mode.name} · 第 ${state.breathe.round}/${mode.rounds} 轮`;
  if (roundEl) roundEl.textContent = `${state.breathe.round}/${mode.rounds}`;
  if (leftEl) leftEl.textContent = `${state.breathe.secondsLeft}s`;
}

function setView(view) {
  if (view !== "breathe") stopBreathing();
  state.view = view;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveDraft() {
  if (!state.draft.moodId) return showToast("请先选择一种情绪");
  const entry = {
    id: "e" + Date.now(),
    moodId: state.draft.moodId,
    intensity: Number(state.draft.intensity),
    triggers: [...state.draft.triggers],
    note: state.draft.note.trim(),
    createdAt: Date.now(),
  };
  state.entries = [entry, ...state.entries];
  saveEntries();
  state.draft = { moodId: entry.moodId, intensity: 5, triggers: [], note: "" };
  showToast("已记下这一刻，给你推荐调节方案");
  setView("care");
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportJSON() {
  const payload = {
    app: "心迹 Mood Care",
    exportedAt: new Date().toISOString(),
    entries: state.entries,
  };
  downloadFile(`xinj-diary-${Date.now()}.json`, JSON.stringify(payload, null, 2), "application/json");
  showToast("已导出 JSON 文件");
}

function exportTXT() {
  const lines = [
    "心迹 · 情绪日记导出",
    `导出时间：${formatDateFull(Date.now())}`,
    `共 ${state.entries.length} 条记录`,
    "".padEnd(28, "-"),
  ];
  state.entries
    .slice()
    .sort((a, b) => a.createdAt - b.createdAt)
    .forEach((e, i) => {
      const m = moodById(e.moodId);
      lines.push(`${i + 1}. ${formatDateFull(e.createdAt)}`);
      lines.push(`   情绪：${m.name}（${m.emoji}） 强度：${e.intensity}/10`);
      lines.push(`   触发：${e.triggers.length ? e.triggers.join("、") : "无"}`);
      lines.push(`   笔记：${e.note || "（无）"}`);
      lines.push("");
    });
  downloadFile(`xinj-diary-${Date.now()}.txt`, lines.join("\n"), "text/plain;charset=utf-8");
  showToast("已导出 TXT 文件");
}

function renderNav() {
  const items = [
    ["home", "首页"],
    ["record", "记录"],
    ["insight", "洞察"],
    ["report", "周报"],
    ["care", "关怀"],
    ["breathe", "呼吸"],
    ["diary", "日记"],
  ];
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">心迹</div>
        <div class="brand-sub">情绪日记与自我关怀</div>
      </div>
      <nav class="nav">
        ${items
          .map(
            ([id, label]) =>
              `<button data-nav="${id}" class="${state.view === id ? "active" : ""}">${label}</button>`
          )
          .join("")}
      </nav>
    </header>
  `;
}

function renderHome() {
  const latest = state.entries[0];
  const m = latest ? moodById(latest.moodId) : null;
  return `
    <section class="hero">
      <div class="hero-copy">
        <h1>把情绪写下来，再温柔对待自己</h1>
        <p>面对学业、职场与社交压力时，用 30 秒完成一次低门槛记录，看清触发因素，并获得可马上做的自我调节方案。</p>
        <div class="cta-row">
          <button class="btn-primary" data-nav="record">开始记录情绪</button>
          <button class="btn-ghost" data-nav="breathe">先做一轮呼吸</button>
        </div>
      </div>
      <div class="hero-panel">
        <h2>此刻感觉如何？</h2>
        <p>${m ? `上次你记录了「${m.name}」，强度 ${latest.intensity}/10。` : "点选一个情绪，快速进入记录。"}</p>
        <div class="mood-mini">
          ${MOODS.slice(0, 5)
            .map(
              (mood) =>
                `<button data-quick="${mood.id}" title="${mood.name}">${mood.emoji}</button>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>今日建议路径</h2>
          <p>记录 → 看见触发因素 → 呼吸/自助方案 → 周报复盘</p>
        </div>
      </div>
      <div class="grid-3">
        <article class="card care-card">
          <div>
            <span class="tag">01 记录</span>
            <h3>30 秒情绪签到</h3>
            <p>选情绪、标强度、点触发因素，不必写很长。</p>
          </div>
          <button class="btn-soft" data-nav="record">去记录</button>
        </article>
        <article class="card care-card">
          <div>
            <span class="tag">02 调节</span>
            <h3>呼吸引导动画</h3>
            <p>跟着圆圈节奏吸气、屏息、呼气，马上能开始。</p>
          </div>
          <button class="btn-soft" data-nav="breathe">开始呼吸</button>
        </article>
        <article class="card care-card">
          <div>
            <span class="tag">03 复盘</span>
            <h3>周报与导出</h3>
            <p>看清一周模式，也能把日记导出带走。</p>
          </div>
          <button class="btn-soft" data-nav="report">看周报</button>
        </article>
      </div>
    </section>
  `;
}

function renderRecord() {
  const d = state.draft;
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>记录这一刻</h2>
          <p>诚实就好，不评判对错</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="field">
            <label>此刻情绪</label>
            <div class="mood-grid">
              ${MOODS.map(
                (m) => `
                <button class="mood-opt ${d.moodId === m.id ? "selected" : ""}" data-mood="${m.id}">
                  <span class="emoji">${m.emoji}</span>
                  <span class="name">${m.name}</span>
                </button>`
              ).join("")}
            </div>
          </div>
          <div class="field">
            <label>情绪强度</label>
            <div class="range-row">
              <input type="range" min="1" max="10" value="${d.intensity}" data-intensity />
              <div class="intensity-val">${d.intensity}/10</div>
            </div>
          </div>
          <div class="field">
            <label>可能的触发因素（可多选）</label>
            <div class="chips">
              ${TRIGGERS.map(
                (t) =>
                  `<button class="chip ${d.triggers.includes(t) ? "on" : ""}" data-trigger="${t}">${t}</button>`
              ).join("")}
            </div>
          </div>
          <div class="field">
            <label>想说的话（可选）</label>
            <textarea data-note placeholder="发生了什么？身体有什么感觉？">${d.note}</textarea>
          </div>
          <button class="btn-primary" data-save>保存并获取关怀建议</button>
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:8px;">为什么这样设计？</h3>
          <p style="color:var(--ink-soft);margin-bottom:12px;">年轻人不是缺少“应该调节”的道理，而是缺少一个足够轻、足够私密、马上能做的入口。</p>
          <div class="insight-list">
            <div class="insight"><div>①</div><div><strong>低门槛</strong><div class="bar"><span style="width:90%"></span></div></div><div>30秒</div></div>
            <div class="insight"><div>②</div><div><strong>可复盘</strong><div class="bar"><span style="width:75%"></span></div></div><div>触发因素</div></div>
            <div class="insight"><div>③</div><div><strong>可行动</strong><div class="bar"><span style="width:85%"></span></div></div><div>自助方案</div></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderInsight() {
  const triggers = analyzeTriggers(state.entries);
  const trend = weekTrend(state.entries);
  const maxAvg = Math.max(...trend.map((t) => t.avg), 1);
  const avgIntensity = state.entries.length
    ? (state.entries.reduce((s, e) => s + e.intensity, 0) / state.entries.length).toFixed(1)
    : "-";
  const topTrigger = triggers[0]?.name || "暂无";
  const moodCount = new Set(state.entries.map((e) => e.moodId)).size;

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪洞察</h2>
          <p>从记录里看见反复出现的模式</p>
        </div>
        <button class="btn-ghost" data-nav="report">查看本周周报</button>
      </div>
      <div class="stats">
        <div class="stat"><strong>${state.entries.length}</strong><span>累计记录</span></div>
        <div class="stat"><strong>${avgIntensity}</strong><span>平均强度</span></div>
        <div class="stat"><strong>${moodCount}</strong><span>情绪种类</span></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">近 7 日情绪趋势</h3>
          <div class="chart">
            ${trend
              .map(
                (d) => `
              <div class="col">
                <div class="pill" style="height:${Math.max(8, (d.avg / maxAvg) * 100)}%"></div>
                <small>${d.label.slice(d.label.indexOf("/") + 1)}</small>
              </div>`
              )
              .join("")}
          </div>
          <p style="margin-top:10px;color:var(--ink-soft);font-size:0.88rem;">柱越高代表当天情绪更偏积极/稳定。</p>
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">高频触发因素</h3>
          ${
            triggers.length === 0
              ? `<div class="empty">还没有足够数据，先去记录几次吧。</div>`
              : `<div class="insight-list">
                ${triggers
                  .slice(0, 6)
                  .map((t) => {
                    const mood = moodById(t.topMood);
                    const width = Math.min(100, t.count * 28);
                    return `
                    <div class="insight">
                      <div>${mood.emoji}</div>
                      <div>
                        <strong>${t.name}</strong>
                        <div class="bar"><span style="width:${width}%"></span></div>
                        <div style="font-size:0.78rem;color:var(--ink-soft);margin-top:4px;">常伴随「${mood.name}」</div>
                      </div>
                      <div style="text-align:right;font-size:0.82rem;">${t.count}次<br/>均强 ${t.avg}</div>
                    </div>`;
                  })
                  .join("")}
              </div>`
          }
          <p style="margin-top:12px;color:var(--ink-soft);font-size:0.88rem;">当前最值得关注的触发点：<strong>${topTrigger}</strong></p>
        </div>
      </div>
    </section>
  `;
}

function renderReport() {
  const report = buildWeeklyReport();
  const trend = weekTrend(state.entries);
  const maxAvg = Math.max(...trend.map((t) => t.avg), 1);
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 6);

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪周报</h2>
          <p>${start.getMonth() + 1}/${start.getDate()} - ${end.getMonth() + 1}/${end.getDate()} · 近 7 天复盘</p>
        </div>
        <div class="action-row">
          <button class="btn-ghost" data-export-txt>导出 TXT</button>
          <button class="btn-primary" data-export-json>导出 JSON</button>
        </div>
      </div>
      <div class="stats stats-4">
        <div class="stat"><strong>${report.week.length}</strong><span>本周记录</span></div>
        <div class="stat"><strong>${report.avgIntensity || "-"}</strong><span>平均强度</span></div>
        <div class="stat"><strong>${report.topMood ? report.topMood.emoji + report.topMood.name : "-"}</strong><span>主导情绪</span></div>
        <div class="stat"><strong>${report.topTrigger ? report.topTrigger.name.slice(0, 6) : "-"}</strong><span>主触发点</span></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="report-quote">${report.headline}</div>
          <div class="report-body">
            ${report.body.map((p) => `<p>${p}</p>`).join("")}
          </div>
          ${
            report.moodRank.length
              ? `<div class="mood-mix">${report.moodRank
                  .slice(0, 5)
                  .map((m) => `<span>${m.emoji} ${m.name} ×${m.count}</span>`)
                  .join("")}</div>`
              : ""
          }
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">本周趋势</h3>
          <div class="chart">
            ${trend
              .map(
                (d) => `
              <div class="col">
                <div class="pill" style="height:${Math.max(8, (d.avg / maxAvg) * 100)}%"></div>
                <small>${d.label.slice(d.label.indexOf("/") + 1)}</small>
              </div>`
              )
              .join("")}
          </div>
          <h3 style="font-family:var(--font-display);margin:16px 0 10px;">高频触发 Top3</h3>
          ${
            report.triggers.length === 0
              ? `<div class="empty">本周暂无触发数据</div>`
              : `<div class="insight-list">
                ${report.triggers
                  .slice(0, 3)
                  .map((t) => {
                    const mood = moodById(t.topMood);
                    return `<div class="insight">
                      <div>${mood.emoji}</div>
                      <div><strong>${t.name}</strong><div class="bar"><span style="width:${Math.min(100, t.count * 30)}%"></span></div></div>
                      <div style="font-size:0.82rem;">${t.count}次</div>
                    </div>`;
                  })
                  .join("")}
              </div>`
          }
          <div class="action-row" style="margin-top:16px;">
            <button class="btn-soft" data-nav="breathe">用呼吸收尾这周</button>
            <button class="btn-ghost" data-nav="record">补一条记录</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCare() {
  const latest = state.entries[0];
  const mood = latest ? moodById(latest.moodId) : moodById("calm");
  const plans = careFor(mood.id);
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>自我关怀方案</h2>
          <p>基于「${mood.emoji} ${mood.name}」为你推荐，选一个马上开始</p>
        </div>
        <button class="btn-ghost" data-nav="breathe">打开呼吸引导</button>
      </div>
      <div class="grid-3">
        ${plans
          .map(
            (p) => `
          <article class="card care-card">
            <div>
              <span class="tag">${p.type}</span>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="meta">
              <span>约 ${p.mins} 分钟</span>
              ${
                p.breathe
                  ? `<button class="btn-soft" data-start-breathe="${p.breathe}">跟练呼吸</button>`
                  : `<button class="btn-soft" data-done="${p.title}">我做完了</button>`
              }
            </div>
          </article>`
          )
          .join("")}
      </div>
      <p class="disclaimer">心迹是自我觉察与日常调节工具，不能替代专业心理咨询或医疗诊断。若持续痛苦或有自伤风险，请寻求专业帮助。</p>
    </section>
  `;
}

function renderBreathe() {
  const mode = BREATHE_MODES[state.breathe.mode];
  const phase = mode.phases[state.breathe.phaseIndex];
  const phaseMs = state.breathe.running ? phase.seconds : 4;
  const ringClass = state.breathe.running ? state.breathe.phaseClass : "idle";
  const label = state.breathe.running ? phase.label : "准备开始";
  const sub = state.breathe.running
    ? `${mode.name} · 第 ${state.breathe.round}/${mode.rounds} 轮`
    : mode.desc;

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>呼吸引导</h2>
          <p>跟着圆圈的涨落，把注意力带回身体</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="breathe-modes">
            ${Object.entries(BREATHE_MODES)
              .map(
                ([id, m]) =>
                  `<button class="mode-chip ${state.breathe.mode === id ? "on" : ""}" data-breathe-mode="${id}">${m.name}</button>`
              )
              .join("")}
          </div>
          <div class="breathe-stage">
            <div
              class="breathe-ring ${ringClass}"
              data-breathe-ring
              style="--phase-ms:${phaseMs}s"
            ></div>
            <div class="breathe-label" data-breathe-label>${label}</div>
            <div class="breathe-sub" data-breathe-sub>${sub}</div>
            <div class="breathe-meta">
              <span>轮次 <strong data-breathe-round>${state.breathe.round}/${mode.rounds}</strong></span>
              <span>倒计时 <strong data-breathe-left>${state.breathe.running ? state.breathe.secondsLeft + "s" : "-"}</strong></span>
            </div>
          </div>
          <div class="action-row" style="justify-content:center;">
            ${
              state.breathe.running
                ? `<button class="btn-ghost" data-stop-breathe>结束练习</button>`
                : `<button class="btn-primary" data-start-breathe="${state.breathe.mode}">开始 ${mode.name}</button>`
            }
          </div>
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">怎么用？</h3>
          <div class="report-body">
            <p>选择一种呼吸模式，坐直或靠着椅背，眼睛可轻轻半闭。</p>
            <p>圆圈变大时吸气，稳住时屏息，缩小时呼气。不用追求完美，跟上节奏即可。</p>
            <p>如果中途走神，温柔地回来就好——这也是练习的一部分。</p>
          </div>
          <div class="insight-list" style="margin-top:16px;">
            <div class="insight"><div>4-7-8</div><div><strong>焦虑 / 睡前</strong><div class="bar"><span style="width:85%"></span></div></div><div>4轮</div></div>
            <div class="insight"><div>方块</div><div><strong>压力 / 职场瞬间</strong><div class="bar"><span style="width:75%"></span></div></div><div>4轮</div></div>
            <div class="insight"><div>平静</div><div><strong>日常微调</strong><div class="bar"><span style="width:65%"></span></div></div><div>6轮</div></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDiary() {
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪日记</h2>
          <p>你的私密记录保存在本机浏览器中</p>
        </div>
        <div class="action-row">
          <button class="btn-ghost" data-export-txt>导出 TXT</button>
          <button class="btn-ghost" data-export-json>导出 JSON</button>
          <button class="btn-primary" data-nav="record">新记录</button>
        </div>
      </div>
      <div class="card timeline">
        ${
          state.entries.length === 0
            ? `<div class="empty">还没有日记，从一次小记录开始。</div>`
            : state.entries
                .map((e) => {
                  const m = moodById(e.moodId);
                  return `
                  <article class="entry">
                    <div class="emoji">${m.emoji}</div>
                    <div>
                      <h4>${m.name} · 强度 ${e.intensity}/10</h4>
                      <div class="note">${e.note || "（未写文字，只留下了情绪痕迹）"}</div>
                      <div class="tags">${e.triggers.map((t) => `<span>${t}</span>`).join("")}</div>
                    </div>
                    <div class="time">${formatTime(e.createdAt)}</div>
                  </article>`;
                })
                .join("")
        }
      </div>
    </section>
  `;
}

function render() {
  const root = document.getElementById("app");
  const views = {
    home: renderHome,
    record: renderRecord,
    insight: renderInsight,
    report: renderReport,
    care: renderCare,
    breathe: renderBreathe,
    diary: renderDiary,
  };
  root.innerHTML = `
    <div class="app-shell">
      ${renderNav()}
      ${(views[state.view] || renderHome)()}
    </div>
    <div class="toast ${state.toast ? "show" : ""}">${state.toast}</div>
  `;
  bind();
}

function bind() {
  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.getAttribute("data-nav")));
  });
  document.querySelectorAll("[data-quick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.draft.moodId = btn.getAttribute("data-quick");
      setView("record");
    });
  });
  document.querySelectorAll("[data-mood]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.draft.moodId = btn.getAttribute("data-mood");
      render();
    });
  });
  document.querySelectorAll("[data-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = btn.getAttribute("data-trigger");
      const set = new Set(state.draft.triggers);
      if (set.has(t)) set.delete(t);
      else set.add(t);
      state.draft.triggers = [...set];
      render();
    });
  });
  const intensity = document.querySelector("[data-intensity]");
  if (intensity) {
    intensity.addEventListener("input", (e) => {
      state.draft.intensity = e.target.value;
      const label = document.querySelector(".intensity-val");
      if (label) label.textContent = `${e.target.value}/10`;
    });
  }
  const note = document.querySelector("[data-note]");
  if (note) {
    note.addEventListener("input", (e) => {
      state.draft.note = e.target.value;
    });
  }
  const save = document.querySelector("[data-save]");
  if (save) save.addEventListener("click", saveDraft);
  document.querySelectorAll("[data-done]").forEach((btn) => {
    btn.addEventListener("click", () => showToast(`很棒，已完成「${btn.getAttribute("data-done")}」`));
  });
  document.querySelectorAll("[data-export-json]").forEach((btn) => {
    btn.addEventListener("click", exportJSON);
  });
  document.querySelectorAll("[data-export-txt]").forEach((btn) => {
    btn.addEventListener("click", exportTXT);
  });
  document.querySelectorAll("[data-breathe-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      stopBreathing();
      state.breathe.mode = btn.getAttribute("data-breathe-mode");
      state.breathe.phaseIndex = 0;
      state.breathe.round = 1;
      state.breathe.secondsLeft = BREATHE_MODES[state.breathe.mode].phases[0].seconds;
      render();
    });
  });
  document.querySelectorAll("[data-start-breathe]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-start-breathe");
      state.view = "breathe";
      startBreathing(mode);
    });
  });
  const stopBtn = document.querySelector("[data-stop-breathe]");
  if (stopBtn) {
    stopBtn.addEventListener("click", () => {
      stopBreathing();
      showToast("已结束本次呼吸练习");
      render();
    });
  }
}

render();
