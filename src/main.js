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
    { type: "冥想", title: "4-7-8 呼吸锚定", desc: "吸气4秒、屏息7秒、呼气8秒，重复4轮，让神经系统慢下来。", mins: 5 },
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
    { type: "冥想", title: "三物专注法", desc: "说出眼前3样颜色、听到3种声音、触碰3种质感。", mins: 3 },
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
    { type: "运动", title: "伸展+深呼吸", desc: "站立伸展配合深呼吸，延续这份好状态。", mins: 6 },
  ],
};

const STORAGE_KEY = "moodcare-entries-v1";
const seedEntries = () => {
  const now = Date.now();
  return [
    { id: "s1", moodId: "anxious", intensity: 7, triggers: ["学业 deadline", "睡眠不足"], note: "论文改到半夜，早上起来心跳有点快。", createdAt: now - 86400000 * 2 },
    { id: "s2", moodId: "tired", intensity: 6, triggers: ["职场会议", "身体状态"], note: "连续开会，脑子转不动。", createdAt: now - 86400000 },
    { id: "s3", moodId: "grateful", intensity: 8, triggers: ["人际关系"], note: "朋友发来鼓励，心里暖了一下。", createdAt: now - 3600000 * 5 },
  ];
};

const state = {
  view: "home",
  entries: loadEntries(),
  draft: { moodId: "calm", intensity: 5, triggers: [], note: "" },
  toast: "",
};

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

function showToast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => {
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

function careFor(moodId) {
  return CARE[moodId] || CARE.default;
}

function setView(view) {
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

function renderNav() {
  const items = [
    ["home", "首页"],
    ["record", "记录"],
    ["insight", "洞察"],
    ["care", "关怀"],
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
          <button class="btn-ghost" data-nav="insight">查看情绪洞察</button>
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
          <p>记录 → 看见触发因素 → 选择一个自助方案</p>
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
            <span class="tag">02 洞察</span>
            <h3>找到反复出现的触发点</h3>
            <p>自动汇总最常让你波动的场景与平均强度。</p>
          </div>
          <button class="btn-soft" data-nav="insight">看洞察</button>
        </article>
        <article class="card care-card">
          <div>
            <span class="tag">03 关怀</span>
            <h3>冥想 / 音乐 / 运动</h3>
            <p>按当前情绪推荐可执行的低门槛调节动作。</p>
          </div>
          <button class="btn-soft" data-nav="care">拿方案</button>
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
        <button class="btn-ghost" data-nav="record">换个情绪重推</button>
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
            <div class="meta"><span>约 ${p.mins} 分钟</span><button class="btn-soft" data-done="${p.title}">我做完了</button></div>
          </article>`
          )
          .join("")}
      </div>
      <p class="disclaimer">心迹是自我觉察与日常调节工具，不能替代专业心理咨询或医疗诊断。若持续痛苦或有自伤风险，请寻求专业帮助。</p>
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
        <button class="btn-primary" data-nav="record">新记录</button>
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
    care: renderCare,
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
}

render();