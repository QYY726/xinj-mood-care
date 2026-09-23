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

/** 周报分享卡片主题：随主导情绪切换配色与装饰 */
const CARD_THEMES = {
  happy: {
    bg0: "#FFF8EC", bg1: "#FFD9A0", accent: "#E08A1E", ink: "#4A2E0C", soft: "#9A6840",
    panel: "rgba(255,255,255,0.55)", tag: "暖光时刻", motif: "sun", tip: "把开心轻轻留住",
  },
  calm: {
    bg0: "#EAF6F1", bg1: "#B7DCCE", accent: "#2F6F5E", ink: "#1A2E28", soft: "#4A635A",
    panel: "rgba(255,255,255,0.55)", tag: "静水深流", motif: "leaf", tip: "稳住呼吸，慢慢来",
  },
  anxious: {
    bg0: "#EAF3FA", bg1: "#A9C8E0", accent: "#3D6F99", ink: "#1C3145", soft: "#5B7C99",
    panel: "rgba(255,255,255,0.5)", tag: "潮汐安顿", motif: "wave", tip: "焦虑可以被看见，也可以被放下",
  },
  tired: {
    bg0: "#EEF0F8", bg1: "#B8BDD8", accent: "#5A6494", ink: "#24283B", soft: "#6B7190",
    panel: "rgba(255,255,255,0.5)", tag: "月下歇息", motif: "moon", tip: "允许自己慢一点、歇一会",
  },
  sad: {
    bg0: "#EEF2F6", bg1: "#B7C5D4", accent: "#5F7A93", ink: "#243040", soft: "#6A7F93",
    panel: "rgba(255,255,255,0.5)", tag: "细雨同行", motif: "rain", tip: "低落时，温柔也是一种力量",
  },
  angry: {
    bg0: "#FFF1EC", bg1: "#F0B5A0", accent: "#C45A3A", ink: "#4A2218", soft: "#A05A45",
    panel: "rgba(255,255,255,0.5)", tag: "余烬冷却", motif: "ember", tip: "先命名情绪，再决定行动",
  },
  lonely: {
    bg0: "#F7F0E8", bg1: "#D8BFA6", accent: "#A06B45", ink: "#3D2A1C", soft: "#8A6A52",
    panel: "rgba(255,255,255,0.5)", tag: "秋叶独行", motif: "leaf", tip: "孤独也可以被温柔陪伴",
  },
  hopeful: {
    bg0: "#F0F8EC", bg1: "#BDDDB0", accent: "#4F8A3C", ink: "#243820", soft: "#5F7A52",
    panel: "rgba(255,255,255,0.55)", tag: "新芽向光", motif: "sprout", tip: "期待本身，就是一种能量",
  },
  stressed: {
    bg0: "#F3F1FF", bg1: "#C7C0E8", accent: "#5B4F9A", ink: "#2A2545", soft: "#6E6790",
    panel: "rgba(255,255,255,0.5)", tag: "风暴暂歇", motif: "bolt", tip: "把压力拆成可迈出的一小步",
  },
  grateful: {
    bg0: "#EEF7F0", bg1: "#B5D9BF", accent: "#3D8B5E", ink: "#1E3528", soft: "#567A62",
    panel: "rgba(255,255,255,0.55)", tag: "叶落有声", motif: "leaf", tip: "感恩让平凡的日子发光",
  },
};

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
const TRIGGERS_KEY = "moodcare-triggers-v1";
const USERS_KEY = "moodcare-users-v1";
const SESSION_KEY = "moodcare-session-v1";
const GUEST_KEY = "moodcare-guest-v1";

const seedEntries = () => {
  const now = Date.now();
  // newest first (降序)
  return [
    { id: "s6", moodId: "hopeful", intensity: 7, triggers: ["学业 deadline"], note: "拆完一个小任务，感觉又能往前走一点。", createdAt: now - 3600000 * 5 },
    { id: "s5", moodId: "grateful", intensity: 8, triggers: ["人际关系"], note: "朋友发来鼓励，心里暖了一下。", createdAt: now - 86400000 },
    { id: "s4", moodId: "lonely", intensity: 5, triggers: ["社交比较", "人际关系"], note: "刷到同学升职，忽然有点空。", createdAt: now - 86400000 * 2 },
    { id: "s3", moodId: "tired", intensity: 6, triggers: ["职场会议", "身体状态"], note: "连续开会，脑子转不动。", createdAt: now - 86400000 * 3 },
    { id: "s2", moodId: "stressed", intensity: 8, triggers: ["职场会议", "自我苛责"], note: "汇报被追问，总觉得自己准备不够。", createdAt: now - 86400000 * 4 },
    { id: "s1", moodId: "anxious", intensity: 7, triggers: ["学业 deadline", "睡眠不足"], note: "论文改到半夜，早上起来心跳有点快。", createdAt: now - 86400000 * 5 },
  ];
};

function hashPassword(password) {
  let h = 2166136261;
  const s = `xinj:${password}`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSessionUser() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const u = JSON.parse(raw);
    if (!u?.id || !u?.email) return null;
    return { id: u.id, name: u.name || "心迹用户", email: u.email };
  } catch {
    return null;
  }
}

function saveSessionUser(user) {
  if (!user) localStorage.removeItem(SESSION_KEY);
  else localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email }));
}

function isGuestMode() {
  return localStorage.getItem(GUEST_KEY) === "1";
}

function setGuestMode(on) {
  if (on) localStorage.setItem(GUEST_KEY, "1");
  else localStorage.removeItem(GUEST_KEY);
}

function scopeKey(base, scope) {
  return `${base}:${scope || "guest"}`;
}

function sortEntriesDesc(entries) {
  return [...entries].sort((a, b) => b.createdAt - a.createdAt);
}

function loadEntriesFor(scope) {
  const key = scopeKey(STORAGE_KEY, scope);
  try {
    const raw = localStorage.getItem(key);
    let list;
    if (!raw) {
      // migrate legacy unscoped data for guest once
      if (scope === "guest") {
        const legacy = localStorage.getItem(STORAGE_KEY);
        if (legacy) {
          list = JSON.parse(legacy);
          list = sortEntriesDesc(Array.isArray(list) ? list : []);
          localStorage.setItem(key, JSON.stringify(list));
          return list;
        }
      }
      const seeded = seedEntries();
      localStorage.setItem(key, JSON.stringify(seeded));
      return seeded;
    }
    list = JSON.parse(raw);
    list = sortEntriesDesc(Array.isArray(list) ? list : []);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  } catch {
    return seedEntries();
  }
}

function loadTriggersFor(scope) {
  const key = scopeKey(TRIGGERS_KEY, scope);
  try {
    const raw = localStorage.getItem(key);
    if (!raw && scope === "guest") {
      const legacy = localStorage.getItem(TRIGGERS_KEY);
      if (legacy) {
        localStorage.setItem(key, legacy);
        const list = JSON.parse(legacy);
        return Array.isArray(list) ? list : [];
      }
    }
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list.filter((t) => typeof t === "string" && t.trim()) : [];
  } catch {
    return [];
  }
}

const bootUser = loadSessionUser();
const bootGuest = !bootUser && isGuestMode();
const bootScope = bootUser?.id || "guest";

function loadCustomTriggers() {
  return loadTriggersFor(state?.user?.id || (state?.guest ? "guest" : bootScope));
}

function saveCustomTriggers() {
  const scope = state.user?.id || "guest";
  localStorage.setItem(scopeKey(TRIGGERS_KEY, scope), JSON.stringify(state.customTriggers));
}

function allTriggers() {
  const extras = state.customTriggers.filter((t) => !TRIGGERS.includes(t));
  return [...TRIGGERS, ...extras];
}

function dayKey(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function checkedInToday() {
  const today = dayKey(Date.now());
  return state.entries.some((e) => dayKey(e.createdAt) === today);
}

function calcStreak() {
  const days = new Set(state.entries.map((e) => dayKey(e.createdAt)));
  if (!days.size) return 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(dayKey(cursor.getTime()))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (days.has(dayKey(cursor.getTime()))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

const APP_VIEWS = ["home", "record", "insight", "report", "care", "breathe", "diary", "followup", "auth"];

function parseHashView() {
  const raw = (location.hash || "").replace(/^#\/?/, "").trim();
  const view = raw.split(/[/?#]/)[0];
  if (APP_VIEWS.includes(view)) return view;
  try {
    const saved = sessionStorage.getItem("moodcare-view");
    if (APP_VIEWS.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  return null;
}

function persistView(view) {
  if (!APP_VIEWS.includes(view)) return;
  try {
    sessionStorage.setItem("moodcare-view", view);
  } catch {
    /* ignore */
  }
  const next = `#/${view}`;
  if (location.hash !== next) {
    history.replaceState(null, "", `${location.pathname}${location.search}${next}`);
  }
}

function assignView(view) {
  state.view = view;
  persistView(view);
}

const bootView = (() => {
  if (!(bootUser || bootGuest)) return "auth";
  const fromHash = parseHashView();
  if (fromHash && fromHash !== "auth") return fromHash;
  return "home";
})();

const state = {
  view: bootView,
  user: bootUser,
  guest: bootGuest,
  authTab: "login",
  authForm: { name: "", email: "", password: "", confirm: "" },
  authError: "",
  entries: loadEntriesFor(bootScope),
  customTriggers: loadTriggersFor(bootScope),
  draft: { moodId: "calm", intensity: 5, triggers: [], note: "", customInput: "" },
  toast: "",
  followUp: null,
  calendarCursor: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  },
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
  const scope = state.user?.id || "guest";
  return loadEntriesFor(scope);
}

function saveEntries() {
  const scope = state.user?.id || "guest";
  localStorage.setItem(scopeKey(STORAGE_KEY, scope), JSON.stringify(state.entries));
}

function reloadUserData() {
  const scope = state.user?.id || "guest";
  state.entries = loadEntriesFor(scope);
  state.customTriggers = loadTriggersFor(scope);
  state.draft = { moodId: "calm", intensity: 5, triggers: [], note: "", customInput: "" };
}

function enterAsGuest() {
  setGuestMode(true);
  saveSessionUser(null);
  state.user = null;
  state.guest = true;
  state.authError = "";
  reloadUserData();
  assignView("home");
  showToast("已进入体验模式，数据保存在本机");
}

function logoutUser() {
  saveSessionUser(null);
  setGuestMode(false);
  state.user = null;
  state.guest = false;
  state.authTab = "login";
  state.authForm = { name: "", email: "", password: "", confirm: "" };
  state.authError = "";
  assignView("auth");
  stopBreathing();
  render();
}

function registerUser() {
  const name = state.authForm.name.trim();
  const email = state.authForm.email.trim().toLowerCase();
  const password = state.authForm.password;
  const confirm = state.authForm.confirm;
  if (!name || name.length < 2) return (state.authError = "请填写至少 2 个字的昵称"), render();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return (state.authError = "请输入有效邮箱"), render();
  if (password.length < 6) return (state.authError = "密码至少 6 位"), render();
  if (password !== confirm) return (state.authError = "两次密码不一致"), render();
  const users = loadUsers();
  if (users.some((u) => u.email === email)) return (state.authError = "该邮箱已注册，请直接登录"), render();
  const user = {
    id: "u" + Date.now(),
    name,
    email,
    passwordHash: hashPassword(password),
    createdAt: Date.now(),
  };
  users.push(user);
  saveUsers(users);
  setGuestMode(false);
  saveSessionUser(user);
  state.user = { id: user.id, name: user.name, email: user.email };
  state.guest = false;
  state.authError = "";
  state.authForm = { name: "", email: "", password: "", confirm: "" };
  reloadUserData();
  assignView("home");
  showToast(`欢迎加入，${user.name}`);
}

function loginUser() {
  const email = state.authForm.email.trim().toLowerCase();
  const password = state.authForm.password;
  if (!email || !password) return (state.authError = "请填写邮箱和密码"), render();
  const users = loadUsers();
  const found = users.find((u) => u.email === email);
  if (!found || found.passwordHash !== hashPassword(password)) {
    state.authError = "邮箱或密码不正确";
    render();
    return;
  }
  setGuestMode(false);
  saveSessionUser(found);
  state.user = { id: found.id, name: found.name, email: found.email };
  state.guest = false;
  state.authError = "";
  state.authForm = { name: "", email: "", password: "", confirm: "" };
  reloadUserData();
  assignView("home");
  showToast(`欢迎回来，${found.name}`);
}

function renderAuth() {
  const tab = state.authTab;
  const f = state.authForm;
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-brand">
          <div class="mark">心迹</div>
          <p>记录情绪，温柔对待自己</p>
        </div>
        <div class="auth-tabs">
          <button type="button" class="${tab === "login" ? "active" : ""}" data-auth-tab="login">登录</button>
          <button type="button" class="${tab === "register" ? "active" : ""}" data-auth-tab="register">注册</button>
        </div>
        ${state.authError ? `<div class="auth-error">${state.authError}</div>` : ""}
        ${
          tab === "register"
            ? `<div class="field"><label>昵称</label><input data-auth-field="name" type="text" placeholder="怎么称呼你" value="${f.name}" autocomplete="nickname" /></div>`
            : ""
        }
        <div class="field">
          <label>邮箱</label>
          <input data-auth-field="email" type="email" placeholder="you@example.com" value="${f.email}" autocomplete="email" />
        </div>
        <div class="field">
          <label>密码</label>
          <input data-auth-field="password" type="password" placeholder="${tab === "register" ? "至少 6 位" : "请输入密码"}" value="${f.password}" autocomplete="${tab === "register" ? "new-password" : "current-password"}" />
        </div>
        ${
          tab === "register"
            ? `<div class="field"><label>确认密码</label><input data-auth-field="confirm" type="password" placeholder="再输入一次" value="${f.confirm}" autocomplete="new-password" /></div>`
            : ""
        }
        <div class="auth-actions">
          <button class="btn-primary" type="button" data-auth-submit>${tab === "login" ? "登录" : "创建账号"}</button>
          <button class="btn-ghost" type="button" data-auth-guest>先体验，无需登录</button>
        </div>
        <p class="auth-hint">账号与日记保存在本机浏览器，便于演示与私密记录。</p>
      </div>
    </div>
  `;
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
  return sortEntriesDesc(state.entries.filter((e) => e.createdAt >= start.getTime()));
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
    openFollowUp(currentMode.name);
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
  if (view !== "followup") state.followUp = null;
  assignView(view);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openFollowUp(activity) {
  stopBreathing();
  const latest = state.entries[0];
  const before = latest ? Number(latest.intensity) : 5;
  state.followUp = {
    activity,
    before,
    after: Math.max(1, before - 1),
    entryId: latest?.id || null,
  };
  assignView("followup");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveFollowUp() {
  const f = state.followUp;
  if (!f) return;
  const after = Number(f.after);
  const idx = state.entries.findIndex((e) => e.id === f.entryId);
  if (idx >= 0) {
    state.entries[idx] = {
      ...state.entries[idx],
      afterIntensity: after,
      careActivity: f.activity,
      caredAt: Date.now(),
    };
    saveEntries();
  }
  const delta = f.before - after;
  state.followUp = null;
  assignView("home");
  if (delta > 0) showToast(`强度下降了 ${delta} 分，你关照到自己了`);
  else if (delta < 0) showToast("强度有波动也没关系，停下来照顾自己本身就很重要");
  else showToast("强度持平，至少你给了自己一次喘息");
}

function addCustomTrigger(raw) {
  const name = (raw || "").trim().slice(0, 20);
  if (!name) return showToast("请输入触发因素");
  if (allTriggers().includes(name)) {
    if (!state.draft.triggers.includes(name)) {
      state.draft.triggers = [...state.draft.triggers, name];
    }
    state.draft.customInput = "";
    showToast("已选中该触发因素");
    render();
    return;
  }
  state.customTriggers = [...state.customTriggers, name];
  saveCustomTriggers();
  state.draft.triggers = [...state.draft.triggers, name];
  state.draft.customInput = "";
  showToast("已添加自定义触发因素");
  render();
}

function removeCustomTrigger(name) {
  state.customTriggers = state.customTriggers.filter((t) => t !== name);
  saveCustomTriggers();
  state.draft.triggers = state.draft.triggers.filter((t) => t !== name);
  showToast("已删除自定义触发因素");
  render();
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
  state.draft = { moodId: entry.moodId, intensity: 5, triggers: [], note: "", customInput: "" };
  showToast(checkedInToday() ? `已记下 · 连续签到 ${calcStreak()} 天` : "已记下这一刻");
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

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = String(text || "").split("");
  let line = "";
  let lines = 0;
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = chars[i];
      y += lineHeight;
      lines += 1;
      if (lines >= maxLines - 1) {
        let rest = chars.slice(i).join("");
        while (ctx.measureText(rest + "…").width > maxWidth && rest.length > 1) {
          rest = rest.slice(0, -1);
        }
        ctx.fillText(rest + "…", x, y);
        return y + lineHeight;
      }
    } else {
      line = test;
    }
  }
  if (line) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }
  return y;
}

function drawCardMotif(ctx, motif, accent, w, h) {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = accent;
  ctx.fillStyle = accent;
  if (motif === "sun") {
    ctx.beginPath();
    ctx.arc(w - 110, 130, 54, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 12; i++) {
      const a = (Math.PI * 2 * i) / 12;
      ctx.beginPath();
      ctx.moveTo(w - 110 + Math.cos(a) * 68, 130 + Math.sin(a) * 68);
      ctx.lineTo(w - 110 + Math.cos(a) * 92, 130 + Math.sin(a) * 92);
      ctx.lineWidth = 6;
      ctx.stroke();
    }
  } else if (motif === "wave") {
    ctx.lineWidth = 5;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      const y = h - 180 - i * 28;
      ctx.moveTo(40, y);
      for (let x = 40; x < w - 40; x += 20) {
        ctx.quadraticCurveTo(x + 10, y + (i % 2 ? 16 : -16), x + 20, y);
      }
      ctx.stroke();
    }
  } else if (motif === "moon") {
    ctx.beginPath();
    ctx.arc(w - 120, 140, 58, 0.45, Math.PI * 1.85);
    ctx.arc(w - 92, 122, 46, Math.PI * 1.55, Math.PI * 0.55, true);
    ctx.closePath();
    ctx.fill();
  } else if (motif === "rain") {
    ctx.lineWidth = 4;
    for (let i = 0; i < 18; i++) {
      const x = 80 + (i % 6) * 70;
      const y = 90 + Math.floor(i / 6) * 70;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 8, y + 28);
      ctx.stroke();
    }
  } else if (motif === "ember") {
    for (let i = 0; i < 7; i++) {
      const x = w - 160 + (i % 3) * 36;
      const y = 100 + Math.floor(i / 3) * 40;
      ctx.beginPath();
      ctx.moveTo(x, y + 28);
      ctx.quadraticCurveTo(x - 12, y + 8, x, y - 10);
      ctx.quadraticCurveTo(x + 12, y + 8, x, y + 28);
      ctx.fill();
    }
  } else if (motif === "sprout") {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w - 120, 210);
    ctx.quadraticCurveTo(w - 120, 140, w - 90, 110);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(w - 150, 130, 28, 16, -0.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w - 95, 145, 26, 14, 0.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (motif === "bolt") {
    ctx.beginPath();
    ctx.moveTo(w - 100, 70);
    ctx.lineTo(w - 145, 145);
    ctx.lineTo(w - 118, 145);
    ctx.lineTo(w - 160, 230);
    ctx.lineTo(w - 95, 140);
    ctx.lineTo(w - 122, 140);
    ctx.closePath();
    ctx.fill();
  } else {
    // leaf default
    ctx.beginPath();
    ctx.ellipse(w - 120, 140, 42, 22, -0.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w - 160, 175, 34, 18, 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function buildWeeklyCardCanvas() {
  const report = buildWeeklyReport();
  const mood = report.topMood || moodById("calm");
  const theme = CARD_THEMES[mood.id] || CARD_THEMES.calm;
  const trend = weekTrend(state.entries);
  const maxAvg = Math.max(...trend.map((t) => t.avg), 1);
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 6);
  const range = `${start.getMonth() + 1}/${start.getDate()} - ${end.getMonth() + 1}/${end.getDate()}`;

  const W = 900;
  const H = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, theme.bg0);
  grad.addColorStop(1, theme.bg1);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // soft orbs
  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = 0.08;
  ctx.beginPath();
  ctx.arc(120, 220, 160, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W - 80, H - 200, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  drawCardMotif(ctx, theme.motif, theme.accent, W, H);

  // brand
  ctx.fillStyle = theme.ink;
  ctx.font = "700 42px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText("心迹", 64, 90);
  ctx.fillStyle = theme.soft;
  ctx.font = "400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText("情绪周报 · " + range, 64, 128);

  // tag chip
  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = 0.15;
  roundRect(ctx, 64, 160, 180, 42, 21);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = theme.accent;
  ctx.font = "600 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText(theme.tag, 84, 188);

  // hero emotion
  ctx.font = "120px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif";
  ctx.fillText(mood.emoji, 64, 340);
  ctx.fillStyle = theme.ink;
  ctx.font = "700 64px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText(mood.name, 210, 320);
  ctx.fillStyle = theme.soft;
  ctx.font = "400 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText("本周主导情绪", 210, 360);

  // headline panel
  ctx.fillStyle = theme.panel;
  roundRect(ctx, 64, 400, W - 128, 160, 28);
  ctx.fill();
  ctx.fillStyle = theme.ink;
  ctx.font = "600 34px 'Fraunces', 'Microsoft YaHei', sans-serif";
  wrapText(ctx, report.headline, 96, 460, W - 200, 44, 3);

  // stats row
  const stats = [
    { label: "本周记录", value: String(report.week.length) },
    { label: "平均强度", value: report.avgIntensity ? String(report.avgIntensity) : "-" },
    { label: "主触发点", value: report.topTrigger ? report.topTrigger.name : "-" },
  ];
  stats.forEach((s, i) => {
    const x = 64 + i * 268;
    ctx.fillStyle = theme.panel;
    roundRect(ctx, x, 590, 248, 130, 24);
    ctx.fill();
    ctx.fillStyle = theme.accent;
    const valueFont =
      s.value.length > 8
        ? "700 26px 'Fraunces', 'Microsoft YaHei', sans-serif"
        : s.value.length > 5
          ? "700 32px 'Fraunces', 'Microsoft YaHei', sans-serif"
          : "700 40px 'Fraunces', 'Microsoft YaHei', sans-serif";
    ctx.font = valueFont;
    wrapText(ctx, s.value, x + 24, 650, 200, 30, 2);
    ctx.fillStyle = theme.soft;
    ctx.font = "400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    ctx.fillText(s.label, x + 24, 696);
  });

  // trend
  ctx.fillStyle = theme.panel;
  roundRect(ctx, 64, 750, W - 128, 260, 28);
  ctx.fill();
  ctx.fillStyle = theme.ink;
  ctx.font = "600 28px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText("本周趋势", 96, 800);

  const chartX = 96;
  const chartY = 820;
  const chartW = W - 192;
  const chartH = 140;
  const barW = chartW / trend.length - 12;
  trend.forEach((d, i) => {
    const h = Math.max(10, (d.avg / maxAvg) * chartH);
    const x = chartX + i * (barW + 12);
    const y = chartY + chartH - h;
    const barGrad = ctx.createLinearGradient(x, y, x, y + h);
    barGrad.addColorStop(0, theme.accent);
    barGrad.addColorStop(1, theme.bg1);
    ctx.fillStyle = barGrad;
    roundRect(ctx, x, y, barW, h, 10);
    ctx.fill();
    ctx.fillStyle = theme.soft;
    ctx.font = "400 16px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    ctx.fillText(d.label.slice(d.label.indexOf("/") + 1), x + barW / 2 - 8, chartY + chartH + 28);
  });

  // tip + footer
  ctx.fillStyle = theme.ink;
  ctx.font = "500 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  wrapText(ctx, theme.tip, 64, 1080, W - 128, 36, 2);

  if (report.moodRank.length) {
    ctx.fillStyle = theme.soft;
    ctx.font = "400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    const mix = report.moodRank
      .slice(0, 4)
      .map((m) => `${m.emoji}${m.name}×${m.count}`)
      .join("  ");
    ctx.fillText(mix, 64, 1160);
  }

  ctx.fillStyle = theme.soft;
  ctx.font = "400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText("心迹 · 记录情绪，温柔对待自己", 64, H - 56);

  return { canvas, mood, theme };
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function closeCardModal() {
  const el = document.querySelector(".card-modal");
  if (el) el.remove();
  document.body.style.overflow = "";
}

function dominantMoodFromEntries(entries) {
  if (!entries.length) return moodById("calm");
  const count = {};
  entries.forEach((e) => {
    count[e.moodId] = (count[e.moodId] || 0) + 1;
  });
  const topId = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  return moodById(topId);
}

const DIARY_RANGES = [
  { id: "7", days: 7, label: "近一周", short: "一周" },
  { id: "15", days: 15, label: "近半个月", short: "半月" },
  { id: "30", days: 30, label: "近一个月", short: "一月" },
];

function diaryRangeById(id) {
  return DIARY_RANGES.find((r) => r.id === id) || DIARY_RANGES[0];
}

function formatRangeSpan(days) {
  const end = new Date();
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));
  return `${start.getMonth() + 1}/${start.getDate()} - ${end.getMonth() + 1}/${end.getDate()}`;
}

function buildDiaryCardCanvas(range = DIARY_RANGES[0]) {
  const entries = entriesInLastDays(range.days);
  const mood = dominantMoodFromEntries(entries);
  const theme = CARD_THEMES[mood.id] || CARD_THEMES.calm;
  const avgIntensity = entries.length
    ? +(entries.reduce((s, e) => s + e.intensity, 0) / entries.length).toFixed(1)
    : 0;
  const streak = calcStreak();
  const latest = entries[0];
  const moodRank = {};
  entries.forEach((e) => {
    moodRank[e.moodId] = (moodRank[e.moodId] || 0) + 1;
  });
  const mix = Object.entries(moodRank)
    .map(([id, count]) => ({ ...moodById(id), count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);
  const span = formatRangeSpan(range.days);

  const W = 900;
  const H = 1200;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, theme.bg0);
  grad.addColorStop(1, theme.bg1);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = 0.08;
  ctx.beginPath();
  ctx.arc(140, 200, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W - 60, H - 160, 180, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  drawCardMotif(ctx, theme.motif, theme.accent, W, H);

  ctx.fillStyle = theme.ink;
  ctx.font = "700 42px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText("心迹", 64, 90);
  ctx.fillStyle = theme.soft;
  ctx.font = "400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText(`情绪日记 · ${range.label} · ${span}`, 64, 128);

  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = 0.15;
  roundRect(ctx, 64, 160, 180, 42, 21);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = theme.accent;
  ctx.font = "600 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText(theme.tag, 84, 188);

  ctx.font = "120px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif";
  ctx.fillText(mood.emoji, 64, 340);
  ctx.fillStyle = theme.ink;
  ctx.font = "700 64px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText(mood.name, 210, 320);
  ctx.fillStyle = theme.soft;
  ctx.font = "400 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText(`${range.label}主导情绪`, 210, 360);

  ctx.fillStyle = theme.panel;
  roundRect(ctx, 64, 400, W - 128, 150, 28);
  ctx.fill();
  ctx.fillStyle = theme.ink;
  ctx.font = "600 30px 'Fraunces', 'Microsoft YaHei', sans-serif";
  const quote = latest?.note
    ? `最近一次：${latest.note}`
    : entries.length
      ? `${range.label}留下 ${entries.length} 段情绪足迹，继续温柔记录。`
      : `${range.label}还没有记录。`;
  wrapText(ctx, quote, 96, 460, W - 200, 40, 3);

  const stats = [
    { label: "时段记录", value: String(entries.length) },
    { label: "平均强度", value: avgIntensity || "-" },
    { label: "连续签到", value: `${streak}天` },
  ];
  stats.forEach((s, i) => {
    const x = 64 + i * 268;
    ctx.fillStyle = theme.panel;
    roundRect(ctx, x, 580, 248, 130, 24);
    ctx.fill();
    ctx.fillStyle = theme.accent;
    ctx.font = "700 40px 'Fraunces', 'Microsoft YaHei', sans-serif";
    ctx.fillText(String(s.value), x + 24, 650);
    ctx.fillStyle = theme.soft;
    ctx.font = "400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    ctx.fillText(s.label, x + 24, 686);
  });

  ctx.fillStyle = theme.panel;
  roundRect(ctx, 64, 740, W - 128, 220, 28);
  ctx.fill();
  ctx.fillStyle = theme.ink;
  ctx.font = "600 28px 'Fraunces', 'Microsoft YaHei', sans-serif";
  ctx.fillText("情绪分布", 96, 790);
  if (mix.length) {
    mix.forEach((m, i) => {
      const y = 830 + i * 32;
      ctx.font = "400 24px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
      ctx.fillStyle = theme.ink;
      ctx.fillText(`${m.emoji}  ${m.name}`, 96, y);
      ctx.fillStyle = theme.soft;
      ctx.fillText(`×${m.count}`, W - 140, y);
    });
  } else {
    ctx.fillStyle = theme.soft;
    ctx.font = "400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    ctx.fillText("该时段暂无分布数据", 96, 850);
  }

  ctx.fillStyle = theme.ink;
  ctx.font = "500 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  wrapText(ctx, theme.tip, 64, 1020, W - 128, 36, 2);

  ctx.fillStyle = theme.soft;
  ctx.font = "400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
  ctx.fillText("心迹 · 记录情绪，温柔对待自己", 64, H - 56);

  return { canvas, mood, theme, range };
}

function showMoodCardModal(kind = "week", range = DIARY_RANGES[0]) {
  const built = kind === "diary" ? buildDiaryCardCanvas(range) : buildWeeklyCardCanvas();
  const { canvas, mood, theme } = built;
  const dataUrl = canvas.toDataURL("image/png");
  const title = kind === "diary" ? `日记卡片预览 · ${range.label}` : "周报卡片预览";
  const alt = kind === "diary" ? "情绪日记卡片" : "情绪周报卡片";
  const filePrefix = kind === "diary" ? `xinj-diary-card-${range.id}d` : "xinj-week-card";
  const toastLabel = kind === "diary" ? `${range.label}日记卡片` : "周报卡片";
  closeCardModal();
  document.body.style.overflow = "hidden";

  const modal = document.createElement("div");
  modal.className = "card-modal";
  modal.innerHTML = `
    <div class="card-modal-backdrop" data-close-card></div>
    <div class="card-modal-panel" style="--card-accent:${theme.accent}">
      <div class="card-modal-head">
        <div>
          <strong>${title}</strong>
          <p>样式已按主导情绪「${mood.emoji} ${mood.name}」渲染</p>
        </div>
        <button class="btn-ghost" data-close-card type="button">关闭</button>
      </div>
      <div class="card-modal-preview">
        <img src="${dataUrl}" alt="${alt}" />
      </div>
      <div class="action-row" style="justify-content:flex-end;">
        ${kind === "diary" ? `<button class="btn-ghost" data-back-diary-range type="button">重选时段</button>` : ""}
        <button class="btn-ghost" data-close-card type="button">取消</button>
        <button class="btn-primary" data-download-card type="button">下载 PNG</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelectorAll("[data-close-card]").forEach((btn) => {
    btn.addEventListener("click", closeCardModal);
  });
  const backBtn = modal.querySelector("[data-back-diary-range]");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      closeCardModal();
      showDiaryRangePicker();
    });
  }
  const dl = modal.querySelector("[data-download-card]");
  if (dl) {
    dl.addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${filePrefix}-${mood.id}-${Date.now()}.png`;
      a.click();
      showToast(`已导出「${mood.name}」主题${toastLabel}`);
      closeCardModal();
    });
  }
}

function showWeeklyCardModal() {
  showMoodCardModal("week");
}

function showDiaryRangePicker() {
  if (!state.entries.length) {
    showToast("还没有日记，先去记录一条吧");
    return;
  }
  closeCardModal();
  document.body.style.overflow = "hidden";

  const modal = document.createElement("div");
  modal.className = "card-modal";
  modal.innerHTML = `
    <div class="card-modal-backdrop" data-close-card></div>
    <div class="card-modal-panel range-picker-panel">
      <div class="card-modal-head">
        <div>
          <strong>导出为卡片</strong>
          <p>选择要汇总的时间段</p>
        </div>
        <button class="btn-ghost" data-close-card type="button">关闭</button>
      </div>
      <div class="range-options">
        ${DIARY_RANGES.map((r) => {
          const count = entriesInLastDays(r.days).length;
          const span = formatRangeSpan(r.days);
          return `
            <button class="range-option" type="button" data-diary-range="${r.id}">
              <div>
                <strong>导出${r.label}</strong>
                <span>${span}</span>
              </div>
              <em>${count} 条</em>
            </button>`;
        }).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelectorAll("[data-close-card]").forEach((btn) => {
    btn.addEventListener("click", closeCardModal);
  });
  modal.querySelectorAll("[data-diary-range]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const range = diaryRangeById(btn.getAttribute("data-diary-range"));
      const count = entriesInLastDays(range.days).length;
      if (!count) {
        showToast(`${range.label}还没有记录`);
        return;
      }
      showMoodCardModal("diary", range);
    });
  });
}

function showDiaryCardModal() {
  showDiaryRangePicker();
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
  const accountLabel = state.user
    ? state.user.name
    : state.guest
      ? "体验中"
      : "未登录";
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">心迹</div>
        <div class="brand-sub">情绪日记与自我关怀</div>
      </div>
      <div class="topbar-right">
        <div class="user-chip">
          <span class="dot"></span>
          <strong>${accountLabel}</strong>
          ${
            state.user
              ? `<button type="button" data-logout>退出</button>`
              : `<button type="button" data-goto-auth>登录</button>`
          }
        </div>
        <nav class="nav">
          ${items
            .map(
              ([id, label]) =>
                `<button data-nav="${id}" class="${state.view === id ? "active" : ""}">${label}</button>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

function renderHome() {
  const latest = state.entries[0];
  const m = latest ? moodById(latest.moodId) : null;
  const streak = calcStreak();
  const todayOk = checkedInToday();
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="streak-row">
          <div class="streak-pill ${todayOk ? "ok" : ""}">
            <span>连续签到</span>
            <strong>${streak}</strong>
            <span>天</span>
          </div>
          <div class="streak-pill ${todayOk ? "ok" : ""}">
            ${todayOk ? "今日已记录 ✓" : "今日还未记录"}
          </div>
        </div>
        <h1>把情绪写下来，再温柔对待自己</h1>
        <p>面对学业、职场与社交压力时，用 30 秒完成一次低门槛记录，看清触发因素，并获得可马上做的自我调节方案。</p>
        <div class="cta-row">
          <button class="btn-primary" data-nav="record">${todayOk ? "再记一条" : "开始今日签到"}</button>
          <button class="btn-ghost" data-nav="breathe">先做一轮呼吸</button>
        </div>
      </div>
      <div class="hero-panel">
        <h2>此刻感觉如何？</h2>
        <p>${m ? `上次你记录了「${m.name}」，强度 ${latest.intensity}/10。` : "点选一个情绪，快速进入记录。"}</p>
        <div class="mood-mini">
          ${MOODS.map(
            (mood) =>
              `<button data-quick="${mood.id}" title="${mood.name}">${mood.emoji}</button>`
          ).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>今日建议路径</h2>
          <p>记录 → 调节 → 回访强度 → 周报复盘</p>
        </div>
      </div>
      <div class="grid-3">
        <article class="card care-card">
          <div>
            <span class="tag">01 记录</span>
            <h3>30 秒情绪签到</h3>
            <p>选情绪、标强度、点触发因素，也可自定义你的触发词。</p>
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
  const triggers = allTriggers();
  const selected = moodById(d.moodId);
  const tip = (CARE[d.moodId] || CARE.default)[0];
  const latest = state.entries[0];
  const latestMood = latest ? moodById(latest.moodId) : null;
  const latestTime = latest
    ? new Date(latest.createdAt).toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>记录这一刻</h2>
          <p>真实就好，没有对错 · 连续签到 ${calcStreak()} 天</p>
        </div>
      </div>
      <div class="grid-2 record-layout">
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
            <label>可能的触发因素（可多选 / 可自定义）</label>
            <div class="chips">
              ${triggers
                .map((t) => {
                  const isCustom = state.customTriggers.includes(t);
                  return `<button class="chip ${d.triggers.includes(t) ? "on" : ""} ${isCustom ? "custom" : ""}" data-trigger="${t}">
                    ${t}${isCustom ? `<span class="chip-x" data-remove-trigger="${t}" title="删除">×</span>` : ""}
                  </button>`;
                })
                .join("")}
            </div>
            <div class="trigger-add">
              <input data-custom-trigger type="text" maxlength="20" placeholder="添加我的触发因素，如：被催进度" value="${d.customInput || ""}" />
              <button class="btn-soft" data-add-trigger type="button">添加</button>
            </div>
          </div>
          <div class="field">
            <label>想说的话（可选）</label>
            <textarea data-note placeholder="发生了什么？身体有什么感觉？">${d.note}</textarea>
          </div>
          <button class="btn-primary" data-save>保存并获取关怀建议</button>
        </div>
        <aside class="record-side">
          <div class="card record-tip">
            <span class="tag">写完可试</span>
            <h3>${selected.emoji} ${tip.title}</h3>
            <p>${tip.desc}</p>
            <div class="record-side-actions">
              <button class="btn-soft" data-nav="breathe">先呼吸一轮</button>
              <button class="btn-ghost" data-nav="care">看关怀建议</button>
            </div>
          </div>
          <div class="card">
            <h3 style="font-family:var(--font-display);margin-bottom:8px;">最近一条</h3>
            ${
              latest
                ? `<p class="record-latest">
                    <strong>${latestMood.emoji} ${latestMood.name}</strong>
                    <span>强度 ${latest.intensity}/10 · ${latestTime}</span>
                    ${latest.note ? `<em>${latest.note}</em>` : `<em style="opacity:.7">当时没有写文字</em>`}
                  </p>
                  <button class="btn-ghost" data-nav="diary" style="margin-top:10px;">查看全部日记</button>`
                : `<p style="color:var(--ink-soft);">还没有记录。保存这一条后，会在这里回看。</p>`
            }
          </div>
        </aside>
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
        <div class="stat"><strong>${calcStreak()}</strong><span>连续签到</span></div>
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

function dayEntries(year, month, day) {
  return state.entries.filter((e) => {
    const d = new Date(e.createdAt);
    return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
  });
}

function moodForCalendarDay(year, month, day) {
  const list = dayEntries(year, month, day);
  if (!list.length) return null;
  return dominantMoodFromEntries(list);
}

function buildMonthCalendar(year, month) {
  const firstDow = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push({ empty: true });
  for (let day = 1; day <= daysInMonth; day++) {
    const list = dayEntries(year, month, day);
    const mood = list.length ? dominantMoodFromEntries(list) : null;
    cells.push({
      empty: false,
      day,
      mood,
      count: list.length,
      isToday:
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === day,
      inWeek: (() => {
        const d = new Date(year, month, day);
        d.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(0, 0, 0, 0);
        const start = new Date(end);
        start.setDate(end.getDate() - 6);
        return d >= start && d <= end;
      })(),
    });
  }
  while (cells.length % 7 !== 0) cells.push({ empty: true });
  return cells;
}

function shiftCalendarMonth(delta) {
  let { year, month } = state.calendarCursor;
  month += delta;
  if (month < 0) {
    month = 11;
    year -= 1;
  } else if (month > 11) {
    month = 0;
    year += 1;
  }
  state.calendarCursor = { year, month };
  render();
}

function goCalendarToday() {
  const now = new Date();
  state.calendarCursor = { year: now.getFullYear(), month: now.getMonth() };
  render();
}

function renderReport() {
  const report = buildWeeklyReport();
  const { year, month } = state.calendarCursor;
  const cells = buildMonthCalendar(year, month);
  const monthLabel = `${year}年${month + 1}月`;
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 6);
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪周报</h2>
          <p>${start.getMonth() + 1}/${start.getDate()} - ${end.getMonth() + 1}/${end.getDate()} · 日历一眼看心情</p>
        </div>
        <div class="action-row">
          <button class="btn-primary" data-export-card>导出为卡片</button>
        </div>
      </div>

      <div class="card mood-calendar">
        <div class="cal-toolbar">
          <button class="btn-ghost cal-nav" type="button" data-cal-prev aria-label="上个月">‹</button>
          <div class="cal-title">
            <strong>${monthLabel}</strong>
            <span>日期下方是当天主导心情</span>
          </div>
          <div class="cal-actions">
            <button class="btn-soft" type="button" data-cal-today>今天</button>
            <button class="btn-ghost cal-nav" type="button" data-cal-next aria-label="下个月">›</button>
          </div>
        </div>
        <div class="cal-weekdays">
          ${weekdays.map((w) => `<span>${w}</span>`).join("")}
        </div>
        <div class="cal-grid">
          ${cells
            .map((cell) => {
              if (cell.empty) return `<div class="cal-cell empty"></div>`;
              const classes = [
                "cal-cell",
                cell.isToday ? "today" : "",
                cell.inWeek ? "in-week" : "",
                cell.mood ? "has-mood" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return `
                <div class="${classes}" title="${cell.mood ? cell.mood.name : "暂无记录"}">
                  <span class="cal-day">${cell.day}</span>
                  <span class="cal-mood">${cell.mood ? cell.mood.emoji : "·"}</span>
                  ${cell.count > 1 ? `<span class="cal-count">${cell.count}</span>` : ""}
                </div>`;
            })
            .join("")}
        </div>
        <div class="cal-legend">
          <span><i class="dot today"></i>今天</span>
          <span><i class="dot week"></i>近 7 天</span>
          <span>有记录的日子会显示心情符号</span>
        </div>
      </div>

      <div class="stats stats-4" style="margin-top:14px;">
        <div class="stat"><strong>${report.week.length}</strong><span>本周记录</span></div>
        <div class="stat"><strong>${report.avgIntensity || "-"}</strong><span>平均强度</span></div>
        <div class="stat"><strong>${report.topMood ? report.topMood.emoji + report.topMood.name : "-"}</strong><span>主导情绪</span></div>
        <div class="stat"><strong>${report.topTrigger ? report.topTrigger.name : "-"}</strong><span>主触发点</span></div>
      </div>

      <div class="grid-2" style="margin-top:14px;">
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
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">高频触发 Top3</h3>
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
          <p>基于「${mood.emoji} ${mood.name}」为你推荐，完成后可回访强度变化</p>
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

function renderFollowUp() {
  const f = state.followUp;
  if (!f) {
    return `<section class="section"><div class="card empty">没有进行中的回访，去完成一个关怀方案吧。<div style="margin-top:12px;"><button class="btn-soft" data-nav="care">回到关怀</button></div></div></section>`;
  }
  const delta = f.before - Number(f.after);
  const deltaText =
    delta > 0 ? `下降 ${delta} 分` : delta < 0 ? `上升 ${Math.abs(delta)} 分` : "持平";
  const deltaClass = delta > 0 ? "delta-good" : "delta-neutral";
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>调节后回访</h2>
          <p>刚完成「${f.activity}」，现在感觉如何？</p>
        </div>
      </div>
      <div class="card" style="max-width:560px;margin:0 auto;">
        <div class="follow-compare">
          <div class="follow-box">
            <div class="num">${f.before}</div>
            <div class="lbl">调节前强度</div>
          </div>
          <div class="follow-arrow">→</div>
          <div class="follow-box">
            <div class="num">${f.after}</div>
            <div class="lbl">现在强度</div>
          </div>
        </div>
        <div class="field">
          <label>拖动记录现在的强度</label>
          <div class="range-row">
            <input type="range" min="1" max="10" value="${f.after}" data-follow-after />
            <div class="intensity-val">${f.after}/10</div>
          </div>
        </div>
        <p style="text-align:center;margin:8px 0 16px;" class="${deltaClass}">相较调节前：${deltaText}</p>
        <div class="action-row" style="justify-content:center;">
          <button class="btn-ghost" data-nav="care">跳过</button>
          <button class="btn-primary" data-save-followup>保存回访</button>
        </div>
      </div>
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
  const entries = sortEntriesDesc(state.entries);
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪日记</h2>
          <p>你的私密记录保存在本机浏览器中</p>
        </div>
        <div class="action-row">
          <button class="btn-primary" data-export-diary-card>导出为卡片</button>
          <button class="btn-ghost" data-nav="record">新记录</button>
        </div>
      </div>
      <div class="card timeline">
        ${
          entries.length === 0
            ? `<div class="empty">还没有日记，从一次小记录开始。</div>`
            : entries
                .map((e) => {
                  const m = moodById(e.moodId);
                  return `
                  <article class="entry">
                    <div class="emoji">${m.emoji}</div>
                    <div>
                      <h4>${m.name} · 强度 ${e.intensity}/10</h4>
                      <div class="note">${e.note || "（未写文字，只留下了情绪痕迹）"}</div>
                      ${
                        e.afterIntensity != null
                          ? `<div class="after">调节后 ${e.afterIntensity}/10${e.careActivity ? ` · ${e.careActivity}` : ""}</div>`
                          : ""
                      }
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
  if (state.view === "auth" || (!state.user && !state.guest)) {
    assignView("auth");
    root.innerHTML = `
      ${renderAuth()}
      <div class="toast ${state.toast ? "show" : ""}">${state.toast}</div>
    `;
    bindAuth();
    return;
  }
  persistView(state.view);
  const views = {
    home: renderHome,
    record: renderRecord,
    insight: renderInsight,
    report: renderReport,
    care: renderCare,
    breathe: renderBreathe,
    followup: renderFollowUp,
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

function bindAuth() {
  document.querySelectorAll("[data-auth-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.authTab = btn.getAttribute("data-auth-tab");
      state.authError = "";
      render();
    });
  });
  document.querySelectorAll("[data-auth-field]").forEach((input) => {
    input.addEventListener("input", (e) => {
      const key = input.getAttribute("data-auth-field");
      state.authForm[key] = e.target.value;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (state.authTab === "login") loginUser();
        else registerUser();
      }
    });
  });
  const submit = document.querySelector("[data-auth-submit]");
  if (submit) {
    submit.addEventListener("click", () => {
      if (state.authTab === "login") loginUser();
      else registerUser();
    });
  }
  const guest = document.querySelector("[data-auth-guest]");
  if (guest) guest.addEventListener("click", enterAsGuest);
}

function bind() {
  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.getAttribute("data-nav")));
  });
  const logoutBtn = document.querySelector("[data-logout]");
  if (logoutBtn) logoutBtn.addEventListener("click", logoutUser);
  const gotoAuth = document.querySelector("[data-goto-auth]");
  if (gotoAuth) {
    gotoAuth.addEventListener("click", () => {
      assignView("auth");
      state.authError = "";
      render();
    });
  }
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
    btn.addEventListener("click", (e) => {
      if (e.target.closest("[data-remove-trigger]")) return;
      const t = btn.getAttribute("data-trigger");
      const set = new Set(state.draft.triggers);
      if (set.has(t)) set.delete(t);
      else set.add(t);
      state.draft.triggers = [...set];
      render();
    });
  });
  document.querySelectorAll("[data-remove-trigger]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeCustomTrigger(btn.getAttribute("data-remove-trigger"));
    });
  });
  const customInput = document.querySelector("[data-custom-trigger]");
  if (customInput) {
    customInput.addEventListener("input", (e) => {
      state.draft.customInput = e.target.value;
    });
    customInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustomTrigger(customInput.value);
      }
    });
  }
  const addTrigger = document.querySelector("[data-add-trigger]");
  if (addTrigger) {
    addTrigger.addEventListener("click", () => {
      const input = document.querySelector("[data-custom-trigger]");
      addCustomTrigger(input ? input.value : state.draft.customInput);
    });
  }
  const intensity = document.querySelector("[data-intensity]");
  if (intensity) {
    intensity.addEventListener("input", (e) => {
      state.draft.intensity = e.target.value;
      const label = document.querySelector(".intensity-val");
      if (label) label.textContent = `${e.target.value}/10`;
    });
  }
  const followAfter = document.querySelector("[data-follow-after]");
  if (followAfter) {
    followAfter.addEventListener("input", (e) => {
      if (!state.followUp) return;
      state.followUp.after = e.target.value;
      const label = document.querySelector(".intensity-val");
      if (label) label.textContent = `${e.target.value}/10`;
      const num = document.querySelectorAll(".follow-box .num")[1];
      if (num) num.textContent = e.target.value;
      const deltaEl = document.querySelector(".follow-compare + .field + p");
      if (deltaEl) {
        const delta = state.followUp.before - Number(e.target.value);
        deltaEl.textContent =
          delta > 0
            ? `相较调节前：下降 ${delta} 分`
            : delta < 0
              ? `相较调节前：上升 ${Math.abs(delta)} 分`
              : "相较调节前：持平";
        deltaEl.className = delta > 0 ? "delta-good" : "delta-neutral";
        deltaEl.style.textAlign = "center";
        deltaEl.style.margin = "8px 0 16px";
      }
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
  const saveFollow = document.querySelector("[data-save-followup]");
  if (saveFollow) saveFollow.addEventListener("click", saveFollowUp);
  document.querySelectorAll("[data-done]").forEach((btn) => {
    btn.addEventListener("click", () => openFollowUp(btn.getAttribute("data-done")));
  });
  document.querySelectorAll("[data-export-json]").forEach((btn) => {
    btn.addEventListener("click", exportJSON);
  });
  document.querySelectorAll("[data-export-txt]").forEach((btn) => {
    btn.addEventListener("click", exportTXT);
  });
  document.querySelectorAll("[data-export-card]").forEach((btn) => {
    btn.addEventListener("click", showWeeklyCardModal);
  });
  document.querySelectorAll("[data-export-diary-card]").forEach((btn) => {
    btn.addEventListener("click", showDiaryCardModal);
  });
  const calPrev = document.querySelector("[data-cal-prev]");
  if (calPrev) calPrev.addEventListener("click", () => shiftCalendarMonth(-1));
  const calNext = document.querySelector("[data-cal-next]");
  if (calNext) calNext.addEventListener("click", () => shiftCalendarMonth(1));
  const calToday = document.querySelector("[data-cal-today]");
  if (calToday) calToday.addEventListener("click", goCalendarToday);
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
      assignView("breathe");
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

window.addEventListener("hashchange", () => {
  if (!state.user && !state.guest) return;
  const view = parseHashView();
  if (!view || view === "auth" || view === state.view) return;
  if (view !== "breathe") stopBreathing();
  if (view !== "followup") state.followUp = null;
  assignView(view);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

persistView(state.view);
render();
