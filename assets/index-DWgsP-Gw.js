(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const R=[{id:"calm",name:"平静",emoji:"🌿",score:4},{id:"happy",name:"开心",emoji:"☀️",score:5},{id:"anxious",name:"焦虑",emoji:"🌊",score:2},{id:"tired",name:"疲惫",emoji:"🌙",score:2},{id:"sad",name:"低落",emoji:"🌧️",score:1},{id:"angry",name:"烦躁",emoji:"🔥",score:1},{id:"lonely",name:"孤独",emoji:"🍂",score:2},{id:"hopeful",name:"期待",emoji:"🌱",score:4},{id:"stressed",name:"压力",emoji:"⚡",score:1},{id:"grateful",name:"感恩",emoji:"🍃",score:5}],U={happy:{bg0:"#FFF8EC",bg1:"#FFD9A0",accent:"#E08A1E",ink:"#4A2E0C",soft:"#9A6840",panel:"rgba(255,255,255,0.55)",tag:"暖光时刻",motif:"sun",tip:"把开心轻轻留住"},calm:{bg0:"#EAF6F1",bg1:"#B7DCCE",accent:"#2F6F5E",ink:"#1A2E28",soft:"#4A635A",panel:"rgba(255,255,255,0.55)",tag:"静水深流",motif:"leaf",tip:"稳住呼吸，慢慢来"},anxious:{bg0:"#EAF3FA",bg1:"#A9C8E0",accent:"#3D6F99",ink:"#1C3145",soft:"#5B7C99",panel:"rgba(255,255,255,0.5)",tag:"潮汐安顿",motif:"wave",tip:"焦虑可以被看见，也可以被放下"},tired:{bg0:"#EEF0F8",bg1:"#B8BDD8",accent:"#5A6494",ink:"#24283B",soft:"#6B7190",panel:"rgba(255,255,255,0.5)",tag:"月下歇息",motif:"moon",tip:"允许自己慢一点、歇一会"},sad:{bg0:"#EEF2F6",bg1:"#B7C5D4",accent:"#5F7A93",ink:"#243040",soft:"#6A7F93",panel:"rgba(255,255,255,0.5)",tag:"细雨同行",motif:"rain",tip:"低落时，温柔也是一种力量"},angry:{bg0:"#FFF1EC",bg1:"#F0B5A0",accent:"#C45A3A",ink:"#4A2218",soft:"#A05A45",panel:"rgba(255,255,255,0.5)",tag:"余烬冷却",motif:"ember",tip:"先命名情绪，再决定行动"},lonely:{bg0:"#F7F0E8",bg1:"#D8BFA6",accent:"#A06B45",ink:"#3D2A1C",soft:"#8A6A52",panel:"rgba(255,255,255,0.5)",tag:"秋叶独行",motif:"leaf",tip:"孤独也可以被温柔陪伴"},hopeful:{bg0:"#F0F8EC",bg1:"#BDDDB0",accent:"#4F8A3C",ink:"#243820",soft:"#5F7A52",panel:"rgba(255,255,255,0.55)",tag:"新芽向光",motif:"sprout",tip:"期待本身，就是一种能量"},stressed:{bg0:"#F3F1FF",bg1:"#C7C0E8",accent:"#5B4F9A",ink:"#2A2545",soft:"#6E6790",panel:"rgba(255,255,255,0.5)",tag:"风暴暂歇",motif:"bolt",tip:"把压力拆成可迈出的一小步"},grateful:{bg0:"#EEF7F0",bg1:"#B5D9BF",accent:"#3D8B5E",ink:"#1E3528",soft:"#567A62",panel:"rgba(255,255,255,0.55)",tag:"叶落有声",motif:"leaf",tip:"感恩让平凡的日子发光"}},dt=["学业 deadline","职场会议","人际关系","睡眠不足","社交比较","家庭关系","身体状态","财务压力","自我苛责","突发变化"],ct={anxious:[{type:"冥想",title:"4-7-8 呼吸锚定",desc:"吸气4秒、屏息7秒、呼气8秒，重复4轮，让神经系统慢下来。",mins:5,breathe:"478"},{type:"音乐",title:"低频白噪音清单",desc:"听雨声或轻柔钢琴，把注意力从担忧回路里轻轻拉开。",mins:10},{type:"运动",title:"快走释放紧张",desc:"出门快走10分钟，同步数呼吸，把身体里的紧张带走。",mins:10}],tired:[{type:"冥想",title:"身体扫描小憩",desc:"从脚趾到头顶依次放松，允许自己短暂停机充电。",mins:8},{type:"音乐",title:"柔和氛围曲",desc:"选无歌词的氛围乐，降低信息输入，给大脑留白。",mins:15},{type:"运动",title:"拉伸唤醒",desc:"肩颈与髋部轻柔拉伸，而不是高强度消耗。",mins:7}],sad:[{type:"冥想",title:"自我关怀短句",desc:"把手放胸口，重复：我现在很难，但这会过去。",mins:5},{type:"音乐",title:"温暖民谣",desc:"听一首熟悉而温柔的歌，允许情绪被看见。",mins:6},{type:"运动",title:"晒太阳散步",desc:"走到有光的地方慢慢走，让身体重新接上外界。",mins:12}],angry:[{type:"冥想",title:"命名情绪",desc:"大声说出：我感到烦躁，因为……。命名能降低强度。",mins:4},{type:"音乐",title:"节奏释放",desc:"先听有力量的鼓点，再切到舒缓曲，完成情绪过渡。",mins:10},{type:"运动",title:"高强度短冲",desc:"原地开合跳或快跑2分钟，把怒气转化为动能。",mins:5}],stressed:[{type:"冥想",title:"方块呼吸",desc:"吸气4、屏息4、呼气4、屏息4，循环重置节奏感。",mins:5,breathe:"box"},{type:"音乐",title:"专注深工作曲",desc:"Lo-fi 或自然声，帮你把压力拆成一个可执行小任务。",mins:20},{type:"运动",title:"方块呼吸行走",desc:"边走边做4-4-4-4呼吸，重新拿回掌控感。",mins:8}],lonely:[{type:"冥想",title:"写信给自己",desc:"写下你希望朋友对你说的话，再读给自己听。",mins:8},{type:"音乐",title:"陪伴向歌单",desc:"选你会跟朋友一起听的歌，制造温柔的连接感。",mins:12},{type:"运动",title:"公共空间漫步",desc:"去公园或咖啡馆走一圈，感受人群的背景温度。",mins:15}],default:[{type:"冥想",title:"今日三件好事",desc:"写下三件微小的好事，训练大脑看见资源。",mins:5,exercise:"goods"},{type:"音乐",title:"清晨清透歌单",desc:"轻快但不刺激的节奏，帮你稳住当下状态。",mins:10},{type:"运动",title:"伸展+深呼吸",desc:"站立伸展配合深呼吸，延续这份好状态。",mins:6,breathe:"calm"}],calm:[{type:"冥想",title:"今日三件好事",desc:"把平静里看见的微小好事写下来，让它多停留一会。",mins:5,exercise:"goods"},{type:"运动",title:"伸展+深呼吸",desc:"站立伸展配合深呼吸，延续这份好状态。",mins:6,breathe:"calm"},{type:"音乐",title:"清晨清透歌单",desc:"轻快但不刺激的节奏，帮你稳住当下状态。",mins:10}],happy:[{type:"冥想",title:"今日三件好事",desc:"趁开心还在，记下三件让你微笑的小事。",mins:5,exercise:"goods"},{type:"音乐",title:"把快乐录下来",desc:"听一首会让你想晃身体的歌，允许自己多开心一会。",mins:8},{type:"运动",title:"伸展+深呼吸",desc:"站立伸展配合深呼吸，把好状态留在身体里。",mins:6,breathe:"calm"}],hopeful:[{type:"冥想",title:"今日三件好事",desc:"期待之外，也看见已经发生的三件好事。",mins:5,exercise:"goods"},{type:"运动",title:"伸展+深呼吸",desc:"用身体稳住这份向前的力气。",mins:6,breathe:"calm"},{type:"音乐",title:"清晨清透歌单",desc:"轻快但不刺激的节奏，陪你把期待落地成一小步。",mins:10}],grateful:[{type:"冥想",title:"今日三件好事",desc:"感恩适合写下来：三件微小的、真实的好事。",mins:5,exercise:"goods"},{type:"音乐",title:"温暖民谣",desc:"听一首熟悉而温柔的歌，让感激再回响一遍。",mins:6},{type:"运动",title:"晒太阳散步",desc:"走到有光的地方慢慢走，把这份暖意带走。",mins:12}]},k={478:{name:"4-7-8 呼吸",desc:"适合焦虑、睡前放松",phases:[{id:"inhale",label:"吸气",seconds:4},{id:"hold",label:"屏息",seconds:7},{id:"exhale",label:"呼气",seconds:8}],rounds:4},box:{name:"方块呼吸",desc:"适合压力大、需要稳住节奏",phases:[{id:"inhale",label:"吸气",seconds:4},{id:"hold",label:"屏息",seconds:4},{id:"exhale",label:"呼气",seconds:4},{id:"hold",label:"再屏息",seconds:4}],rounds:4},calm:{name:"平静呼吸",desc:"适合日常微调、恢复能量",phases:[{id:"inhale",label:"吸气",seconds:4},{id:"exhale",label:"呼气",seconds:6}],rounds:6}},Q="moodcare-entries-v1",Z="moodcare-triggers-v1",wt="moodcare-goods-v1",Et="moodcare-users-v1",tt="moodcare-session-v1",et="moodcare-guest-v1",_t=["一件小事就好，比如今天天气不错","有人对你温柔，或你对别人温柔了吗？","你自己做对了什么，哪怕很小？"],ut=()=>{const t=Date.now();return[{id:"s6",moodId:"hopeful",intensity:7,triggers:["学业 deadline"],note:"拆完一个小任务，感觉又能往前走一点。",createdAt:t-36e5*5},{id:"s5",moodId:"grateful",intensity:8,triggers:["人际关系"],note:"朋友发来鼓励，心里暖了一下。",createdAt:t-864e5},{id:"s4",moodId:"lonely",intensity:5,triggers:["社交比较","人际关系"],note:"刷到同学升职，忽然有点空。",createdAt:t-864e5*2},{id:"s3",moodId:"tired",intensity:6,triggers:["职场会议","身体状态"],note:"连续开会，脑子转不动。",createdAt:t-864e5*3},{id:"s2",moodId:"stressed",intensity:8,triggers:["职场会议","自我苛责"],note:"汇报被追问，总觉得自己准备不够。",createdAt:t-864e5*4},{id:"s1",moodId:"anxious",intensity:7,triggers:["学业 deadline","睡眠不足"],note:"论文改到半夜，早上起来心跳有点快。",createdAt:t-864e5*5},{id:"s0c",moodId:"calm",intensity:4,triggers:["身体状态"],note:"周末睡饱了，心里松一点。",createdAt:t-864e5*8},{id:"s0b",moodId:"angry",intensity:7,triggers:["家庭关系"],note:"家里一句话顶上来，火气又起。",createdAt:t-864e5*10},{id:"s0a",moodId:"anxious",intensity:8,triggers:["学业 deadline","自我苛责"],note:"上周ddl更慌，几乎睡不好。",createdAt:t-864e5*12}]};function Dt(t){let e=2166136261;const s=`xinj:${t}`;for(let a=0;a<s.length;a++)e^=s.charCodeAt(a),e=Math.imul(e,16777619);return(e>>>0).toString(16)}function It(){try{const t=localStorage.getItem(Et);return t?JSON.parse(t):[]}catch{return[]}}function zt(t){localStorage.setItem(Et,JSON.stringify(t))}function Kt(){try{const t=localStorage.getItem(tt);if(!t)return null;const e=JSON.parse(t);return!(e!=null&&e.id)||!(e!=null&&e.email)?null:{id:e.id,name:e.name||"心迹用户",email:e.email}}catch{return null}}function J(t){t?localStorage.setItem(tt,JSON.stringify({id:t.id,name:t.name,email:t.email})):localStorage.removeItem(tt)}function Vt(){return localStorage.getItem(et)==="1"}function W(t){t?localStorage.setItem(et,"1"):localStorage.removeItem(et)}function j(t,e){return`${t}:${e||"guest"}`}function N(t){return[...t].sort((e,s)=>s.createdAt-e.createdAt)}function At(t){const e=j(Q,t);try{const s=localStorage.getItem(e);let a;if(!s){if(t==="guest"){const i=localStorage.getItem(Q);if(i)return a=JSON.parse(i),a=N(Array.isArray(a)?a:[]),localStorage.setItem(e,JSON.stringify(a)),a}const o=ut();return localStorage.setItem(e,JSON.stringify(o)),o}return a=JSON.parse(s),a=N(Array.isArray(a)?a:[]),localStorage.setItem(e,JSON.stringify(a)),a}catch{return ut()}}function xt(t){const e=j(Z,t);try{const s=localStorage.getItem(e);if(!s&&t==="guest"){const o=localStorage.getItem(Z);if(o){localStorage.setItem(e,o);const i=JSON.parse(o);return Array.isArray(i)?i:[]}}if(!s)return[];const a=JSON.parse(s);return Array.isArray(a)?a.filter(o=>typeof o=="string"&&o.trim()):[]}catch{return[]}}const L=Kt(),Mt=!L&&Vt(),K=(L==null?void 0:L.id)||"guest";function kt(){var e;const t=((e=n.user)==null?void 0:e.id)||"guest";localStorage.setItem(j(Z,t),JSON.stringify(n.customTriggers))}function nt(t){const e=j(wt,t);try{const s=localStorage.getItem(e);if(!s)return{};const a=JSON.parse(s);return a&&typeof a=="object"?a:{}}catch{return{}}}function Xt(t){var s;const e=((s=n.user)==null?void 0:s.id)||"guest";localStorage.setItem(j(wt,e),JSON.stringify(t))}function Tt(){return T(Date.now())}function Ct(t){const s=nt(t)[Tt()];return Array.isArray(s)&&s.length?[0,1,2].map(a=>String(s[a]||"")):["","",""]}function Ft(t){return(t||[]).filter(e=>String(e||"").trim()).length}function Qt(){var a;const t=n.goodsDraft.map(o=>String(o||"").trim()),e=t.filter(Boolean);if(!e.length)return S("先写下一件小事也好");const s=nt(((a=n.user)==null?void 0:a.id)||"guest");s[Tt()]=t,Xt(s),n.goodsDraft=t,S(e.length>=3?"三件好事已收好，今天也有光":`已记下 ${e.length} 件好事`),b()}function Zt(t=7){var o;const e=nt(((o=n.user)==null?void 0:o.id)||"guest"),s=Date.now(),a=[];for(let i=0;i<t;i++){const l=T(s-i*864e5),u=e[l];if(!Array.isArray(u))continue;const g=u.map(d=>String(d||"").trim()).filter(Boolean);g.length&&a.push({day:l,items:g})}return a}function Lt(){const t=n.customTriggers.filter(e=>!dt.includes(e));return[...dt,...t]}function T(t){const e=new Date(t);return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}function te(t){return String(t||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jt(){const t=T(Date.now());return n.entries.some(e=>T(e.createdAt)===t)}function P(){const t=new Set(n.entries.map(a=>T(a.createdAt)));if(!t.size)return 0;const e=new Date;e.setHours(0,0,0,0),t.has(T(e.getTime()))||e.setDate(e.getDate()-1);let s=0;for(;t.has(T(e.getTime()));)s+=1,e.setDate(e.getDate()-1);return s}const at=["home","record","insight","report","care","breathe","diary","followup","auth"];function qt(){const e=(location.hash||"").replace(/^#\/?/,"").trim().split(/[/?#]/)[0];if(at.includes(e))return e;try{const s=sessionStorage.getItem("moodcare-view");if(at.includes(s))return s}catch{}return null}function ot(t){if(!at.includes(t))return;try{sessionStorage.setItem("moodcare-view",t)}catch{}const e=`#/${t}`;location.hash!==e&&history.replaceState(null,"",`${location.pathname}${location.search}${e}`)}function D(t){n.view=t,ot(t)}const ee=(()=>{if(!(L||Mt))return"auth";const t=qt();return t&&t!=="auth"?t:"home"})(),n={view:ee,user:L,guest:Mt,authTab:"login",authForm:{name:"",email:"",password:"",confirm:""},authError:"",entries:At(K),customTriggers:xt(K),draft:{moodId:"calm",intensity:5,triggers:[],note:"",customInput:""},goodsDraft:Ct(K),recordTipIndex:0,toast:"",followUp:null,calendarCursor:{year:new Date().getFullYear(),month:new Date().getMonth()},breathe:{mode:"478",running:!1,phaseIndex:0,round:1,secondsLeft:4,phaseClass:"idle"}};let Y=null,V=null;function Nt(){var e;const t=((e=n.user)==null?void 0:e.id)||"guest";localStorage.setItem(j(Q,t),JSON.stringify(n.entries))}function it(){var e;const t=((e=n.user)==null?void 0:e.id)||"guest";n.entries=At(t),n.customTriggers=xt(t),n.goodsDraft=Ct(t),n.draft={moodId:"calm",intensity:5,triggers:[],note:"",customInput:""}}function ae(){W(!0),J(null),n.user=null,n.guest=!0,n.authError="",it(),D("home"),S("已进入体验模式，数据保存在本机")}function se(){J(null),W(!1),n.user=null,n.guest=!1,n.authTab="login",n.authForm={name:"",email:"",password:"",confirm:""},n.authError="",D("auth"),A(),b()}function ft(){const t=n.authForm.name.trim(),e=n.authForm.email.trim().toLowerCase(),s=n.authForm.password,a=n.authForm.confirm;if(!t||t.length<2)return n.authError="请填写至少 2 个字的昵称",b();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return n.authError="请输入有效邮箱",b();if(s.length<6)return n.authError="密码至少 6 位",b();if(s!==a)return n.authError="两次密码不一致",b();const o=It();if(o.some(l=>l.email===e))return n.authError="该邮箱已注册，请直接登录",b();const i={id:"u"+Date.now(),name:t,email:e,passwordHash:Dt(s),createdAt:Date.now()};o.push(i),zt(o),W(!1),J(i),n.user={id:i.id,name:i.name,email:i.email},n.guest=!1,n.authError="",n.authForm={name:"",email:"",password:"",confirm:""},it(),D("home"),S(`欢迎加入，${i.name}`)}function pt(){const t=n.authForm.email.trim().toLowerCase(),e=n.authForm.password;if(!t||!e)return n.authError="请填写邮箱和密码",b();const a=It().find(o=>o.email===t);if(!a||a.passwordHash!==Dt(e)){n.authError="邮箱或密码不正确",b();return}W(!1),J(a),n.user={id:a.id,name:a.name,email:a.email},n.guest=!1,n.authError="",n.authForm={name:"",email:"",password:"",confirm:""},it(),D("home"),S(`欢迎回来，${a.name}`)}function ne(){const t=n.authTab,e=n.authForm;return`
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-brand">
          <div class="mark">心迹</div>
          <p>记录情绪，温柔对待自己</p>
        </div>
        <div class="auth-tabs">
          <button type="button" class="${t==="login"?"active":""}" data-auth-tab="login">登录</button>
          <button type="button" class="${t==="register"?"active":""}" data-auth-tab="register">注册</button>
        </div>
        ${n.authError?`<div class="auth-error">${n.authError}</div>`:""}
        ${t==="register"?`<div class="field"><label>昵称</label><input data-auth-field="name" type="text" placeholder="怎么称呼你" value="${e.name}" autocomplete="nickname" /></div>`:""}
        <div class="field">
          <label>邮箱</label>
          <input data-auth-field="email" type="email" placeholder="you@example.com" value="${e.email}" autocomplete="email" />
        </div>
        <div class="field">
          <label>密码</label>
          <input data-auth-field="password" type="password" placeholder="${t==="register"?"至少 6 位":"请输入密码"}" value="${e.password}" autocomplete="${t==="register"?"new-password":"current-password"}" />
        </div>
        ${t==="register"?`<div class="field"><label>确认密码</label><input data-auth-field="confirm" type="password" placeholder="再输入一次" value="${e.confirm}" autocomplete="new-password" /></div>`:""}
        <div class="auth-actions">
          <button class="btn-primary" type="button" data-auth-submit>${t==="login"?"登录":"创建账号"}</button>
          <button class="btn-ghost" type="button" data-auth-guest>先体验，无需登录</button>
        </div>
        <p class="auth-hint">账号与日记保存在本机浏览器，便于演示与私密记录。</p>
      </div>
    </div>
  `}function y(t){return R.find(e=>e.id===t)||R[0]}function B(t){return y(t).score<=2}function rt(t){const e=y(t);return B(t)?`强度表示「${e.name}」有多强烈：越高越难受，调节后常希望它下来`:e.score>=4?`强度表示「${e.name}」有多鲜明：越高感受越明显，并不等于越好或越坏`:"强度表示这种情绪有多强烈，与好坏无关"}function lt(t,e,s){const a=Number(e)-Number(s),o=y(t),i=a>0?`感受强度下降 ${a} 分`:a<0?`感受强度上升 ${Math.abs(a)} 分`:"感受强度持平";let l="你已经停下来关照自己了。",u=!0;return a!==0&&B(t)?a>0?(l="难受感松了一点，很好。",u=!0):(l="难受感还有起伏也没关系，停下来本身就很重要。",u=!1):a!==0&&(a<0?(l=`「${o.name}」更鲜明了，也可以好好感受。`,u=!0):(l=`「${o.name}」淡了一些，情绪本来就会流动。`,u=!0)),{delta:a,line:`相较调节前：${i}。${l}`,toast:a===0?"感受强度持平，至少你给了自己一次喘息":B(t)?a>0?`难受感降了 ${a} 分，你关照到自己了`:"难受感有波动也没关系，停下来照顾自己本身就很重要":a<0?`「${o.name}」更鲜明了，也可以好好感受这份情绪`:`「${o.name}」淡了一些，情绪流动本身就很自然`,cls:u?"delta-good":"delta-neutral"}}function oe(t){const e=new Date(t),s=new Date,a=e.toDateString()===s.toDateString(),o=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return a?`今天 ${o}:${i}`:`${e.getMonth()+1}/${e.getDate()} ${o}:${i}`}function gt(t){const e=new Date(t);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}function S(t){n.toast=t,b(),V&&clearTimeout(V),V=setTimeout(()=>{n.toast="";const e=document.querySelector(".toast");e&&e.classList.remove("show")},1800)}function Ht(t){const e={};return t.forEach(s=>{s.triggers.forEach(a=>{e[a]=e[a]||{count:0,intensity:0,moods:{}},e[a].count+=1,e[a].intensity+=s.intensity,e[a].moods[s.moodId]=(e[a].moods[s.moodId]||0)+1})}),Object.entries(e).map(([s,a])=>{var o;return{name:s,count:a.count,avg:+(a.intensity/a.count).toFixed(1),topMood:(o=Object.entries(a.moods).sort((i,l)=>l[1]-i[1])[0])==null?void 0:o[0]}}).sort((s,a)=>a.count-s.count||a.avg-s.avg)}function Pt(t){const e=[];for(let s=6;s>=0;s--){const a=new Date;a.setHours(0,0,0,0),a.setDate(a.getDate()-s);const o=a.toDateString(),i=t.filter(u=>new Date(u.createdAt).toDateString()===o),l=i.length?i.reduce((u,g)=>u+y(g.moodId).score,0)/i.length:0;e.push({label:`${a.getMonth()+1}/${a.getDate()}`,avg:l,count:i.length})}return e}function G(t=7){const e=new Date;return e.setHours(0,0,0,0),e.setDate(e.getDate()-(t-1)),N(n.entries.filter(s=>s.createdAt>=e.getTime()))}function mt(t,e){const s=new Date;s.setHours(0,0,0,0),s.setDate(s.getDate()-t);const a=new Date;return a.setHours(23,59,59,999),a.setDate(a.getDate()-e),N(n.entries.filter(o=>o.createdAt>=s.getTime()&&o.createdAt<=a.getTime()))}function ht(t,e){const s=new Date;s.setHours(0,0,0,0),s.setDate(s.getDate()-t);const a=new Date;return a.setHours(0,0,0,0),a.setDate(a.getDate()-e),`${s.getMonth()+1}/${s.getDate()} - ${a.getMonth()+1}/${a.getDate()}`}function vt(t){const e=t.length,s=e?+(t.reduce((d,p)=>d+p.intensity,0)/e).toFixed(1):0,a=e?+(t.reduce((d,p)=>d+y(p.moodId).score,0)/e).toFixed(1):0,o={};t.forEach(d=>{o[d.moodId]=(o[d.moodId]||0)+1});const i=Object.entries(o).map(([d,p])=>({...y(d),count:p})).sort((d,p)=>p.count-d.count)[0]||null,l=t.filter(d=>B(d.moodId)).length,u=e?Math.round(l/e*100):0,g=t.filter(d=>d.intensity>=7).length;return{count:e,avgIntensity:s,avgScore:a,topMood:i,distressRatio:u,highIntensity:g,entries:t}}function bt(t,e){const s=[];for(let a=t;a>=e;a--){const o=new Date;o.setHours(0,0,0,0),o.setDate(o.getDate()-a);const i=o.toDateString(),l=n.entries.filter(g=>new Date(g.createdAt).toDateString()===i),u=l.length?l.reduce((g,d)=>g+y(d.moodId).score,0)/l.length:0;s.push({label:`${o.getMonth()+1}/${o.getDate()}`,weekday:["日","一","二","三","四","五","六"][o.getDay()],avg:u,count:l.length})}return s}function O(t,e=1){if(t===0||Number.isNaN(t))return"持平";const s=Number(t.toFixed(e));return s>0?`↑${s}`:`↓${Math.abs(s)}`}function ie(){const t=mt(6,0),e=mt(13,7),s=vt(t),a=vt(e),o=bt(6,0),i=bt(13,7),l=Math.max(...o.map(c=>c.avg),...i.map(c=>c.avg),1),u=s.count-a.count,g=+(s.avgIntensity-a.avgIntensity).toFixed(1),d=+(s.avgScore-a.avgScore).toFixed(1),p=s.distressRatio-a.distressRatio,r=[{key:"count",label:"记录次数",prev:a.count,curr:s.count,max:Math.max(a.count,s.count,1),delta:O(u,0),better:u>=0},{key:"score",label:"情绪平稳分",prev:a.avgScore||0,curr:s.avgScore||0,max:5,delta:O(d,1),better:d>=0,hint:"越高越偏平静/积极"},{key:"intensity",label:"平均感受强度",prev:a.avgIntensity||0,curr:s.avgIntensity||0,max:10,delta:O(g,1),better:null,hint:"感受有多强烈，不是好坏"},{key:"distress",label:"难受情绪占比",prev:a.distressRatio,curr:s.distressRatio,max:100,delta:O(p,0)+(p!==0?"%":""),better:p<=0,unit:"%"}],m=[];return!a.count&&!s.count?m.push("近两周都还没有记录。先从本周签到开始，下周就能看到变化了。"):a.count?s.count?(u>0?m.push(`本周多记了 ${u} 次，觉察的频率在往上走。`):u<0?m.push(`本周比上周少记了 ${Math.abs(u)} 次，忙也没关系，回来记一条就好。`):m.push("两周记录次数差不多，节奏保持得不错。"),d>.3?m.push(`情绪平稳分上升 ${d}，整体比上周更稳一点。`):d<-.3&&m.push(`情绪平稳分下降 ${Math.abs(d)}，这一周可能更辛苦，你已经在看见它了。`),p<=-10?m.push(`难受类情绪占比下降 ${Math.abs(p)}%，呼吸与关怀可能帮上了忙。`):p>=10&&m.push(`难受类情绪占比上升 ${p}%，可以多给自己一次呼吸或三件好事。`),s.topMood&&a.topMood&&s.topMood.id!==a.topMood.id?m.push(`主导情绪从「${a.topMood.emoji}${a.topMood.name}」变为「${s.topMood.emoji}${s.topMood.name}」。`):s.topMood&&m.push(`两周主导情绪都是「${s.topMood.emoji}${s.topMood.name}」，可以留意它常在什么场景出现。`),m.length<2&&m.push("变化不必追求「变好」，看见差异本身就是一种照顾自己。")):m.push("上周有记录，本周暂时空着。补一两天签到，变化曲线就会接上。"):m.push("上周几乎还没留下痕迹，本周已开始记录——对比会越来越有意义。"),{thisLabel:ht(6,0),lastLabel:ht(13,7),curr:s,prev:a,metrics:r,thisDays:o,lastDays:i,maxAvg:l,notes:m}}function Ot(){const t=G(7),e=Ht(t),s={};t.forEach(r=>{s[r.moodId]=(s[r.moodId]||0)+1});const a=Object.entries(s).map(([r,m])=>({...y(r),count:m})).sort((r,m)=>m.count-r.count),o=t.length?+(t.reduce((r,m)=>r+m.intensity,0)/t.length).toFixed(1):0,i=t.length?+(t.reduce((r,m)=>r+y(m.moodId).score,0)/t.length).toFixed(1):0,l=a[0]||null,u=e[0]||null,g=t.filter(r=>r.intensity>=7).length;let d="这一周，你开始更认真地看见自己了。",p=[];return t.length?(i>=3.5?d="这一周整体偏稳，值得肯定自己的小坚持。":i<=2.2?d="这一周情绪波动偏大，你已经很努力了。":d="这一周有起伏，也有被你接住的片刻。",p.push(`你共记录了 ${t.length} 次情绪，平均感受强度 ${o}/10（强度=感受有多强烈，不是好坏）。`),l&&p.push(`出现最多的是「${l.emoji} ${l.name}」（${l.count} 次）。`),u&&p.push(`最常出现的触发因素是「${u.name}」，平均感受强度 ${u.avg}。`),g>=2?p.push(`有 ${g} 次感受很强烈（≥7）。若当时是难受的情绪，下次可先做一轮呼吸再回应。`):p.push("特别强烈的时刻不算多，说明你正在练习先看见情绪再行动。"),p.push("下周可以试着：每天至少记录一次，并完成一次呼吸练习。")):(d="这一周还没有记录。",p=["从一次 30 秒签到开始，周报会慢慢长出你的情绪地图。"]),{week:t,triggers:e,moodRank:a,avgIntensity:o,avgScore:i,topMood:l,topTrigger:u,headline:d,body:p}}function re(t){return ct[t]||ct.default}function A(){Y&&(clearInterval(Y),Y=null),n.breathe.running=!1,n.breathe.phaseClass="idle"}function le(t){A();const e=k[t]||k[478];n.breathe.mode=t,n.breathe.running=!0,n.breathe.phaseIndex=0,n.breathe.round=1;const s=e.phases[0];n.breathe.secondsLeft=s.seconds,n.breathe.phaseClass=s.id,b(),Y=setInterval(()=>{const a=k[n.breathe.mode];if(!n.breathe.running||!a)return A();if(n.breathe.secondsLeft>1){n.breathe.secondsLeft-=1,X();return}const o=n.breathe.phaseIndex+1;if(o<a.phases.length){n.breathe.phaseIndex=o;const i=a.phases[o];n.breathe.secondsLeft=i.seconds,n.breathe.phaseClass=i.id,X(!0);return}if(n.breathe.round<a.rounds){n.breathe.round+=1,n.breathe.phaseIndex=0;const i=a.phases[0];n.breathe.secondsLeft=i.seconds,n.breathe.phaseClass=i.id,X(!0);return}A(),Yt(a.name)},1e3)}function X(t=!1){const e=k[n.breathe.mode],s=e.phases[n.breathe.phaseIndex],a=document.querySelector("[data-breathe-ring]"),o=document.querySelector("[data-breathe-label]"),i=document.querySelector("[data-breathe-sub]"),l=document.querySelector("[data-breathe-round]"),u=document.querySelector("[data-breathe-left]");!a||!s||(t&&(a.className="breathe-ring idle",a.offsetWidth,a.style.setProperty("--phase-ms",`${s.seconds}s`),a.className=`breathe-ring ${s.id}`),o&&(o.textContent=s.label),i&&(i.textContent=`${e.name} · 第 ${n.breathe.round}/${e.rounds} 轮`),l&&(l.textContent=`${n.breathe.round}/${e.rounds}`),u&&(u.textContent=`${n.breathe.secondsLeft}s`))}function st(t){t!=="breathe"&&A(),t!=="followup"&&(n.followUp=null),D(t),b(),window.scrollTo({top:0,behavior:"smooth"})}function Yt(t){A();const e=n.entries[0],s=e?Number(e.intensity):5;n.followUp={activity:t,before:s,after:Math.max(1,s-1),entryId:(e==null?void 0:e.id)||null,moodId:(e==null?void 0:e.moodId)||n.draft.moodId||"calm"},D("followup"),b(),window.scrollTo({top:0,behavior:"smooth"})}function de(){const t=n.followUp;if(!t)return;const e=Number(t.after),s=n.entries.findIndex(o=>o.id===t.entryId);s>=0&&(n.entries[s]={...n.entries[s],afterIntensity:e,careActivity:t.activity,caredAt:Date.now()},Nt());const a=lt(t.moodId,t.before,e);n.followUp=null,D("home"),S(a.toast)}function yt(t){const e=(t||"").trim().slice(0,20);if(!e)return S("请输入触发因素");if(Lt().includes(e)){n.draft.triggers.includes(e)||(n.draft.triggers=[...n.draft.triggers,e]),n.draft.customInput="",S("已选中该触发因素"),b();return}n.customTriggers=[...n.customTriggers,e],kt(),n.draft.triggers=[...n.draft.triggers,e],n.draft.customInput="",S("已添加自定义触发因素"),b()}function ce(t){n.customTriggers=n.customTriggers.filter(e=>e!==t),kt(),n.draft.triggers=n.draft.triggers.filter(e=>e!==t),S("已删除自定义触发因素"),b()}function ue(){if(!n.draft.moodId)return S("请先选择一种情绪");const t={id:"e"+Date.now(),moodId:n.draft.moodId,intensity:Number(n.draft.intensity),triggers:[...n.draft.triggers],note:n.draft.note.trim(),createdAt:Date.now()};n.entries=[t,...n.entries],Nt(),n.draft={moodId:t.moodId,intensity:5,triggers:[],note:"",customInput:""},S(jt()?`已记下 · 连续签到 ${P()} 天`:"已记下这一刻"),st("care")}function Rt(t,e,s){const a=new Blob([e],{type:s}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.download=t,i.click(),URL.revokeObjectURL(o)}function fe(){const t={app:"心迹 Mood Care",exportedAt:new Date().toISOString(),entries:n.entries};Rt(`xinj-diary-${Date.now()}.json`,JSON.stringify(t,null,2),"application/json"),S("已导出 JSON 文件")}function pe(){const t=["心迹 · 情绪日记导出",`导出时间：${gt(Date.now())}`,`共 ${n.entries.length} 条记录`,"".padEnd(28,"-")];n.entries.slice().sort((e,s)=>e.createdAt-s.createdAt).forEach((e,s)=>{const a=y(e.moodId);t.push(`${s+1}. ${gt(e.createdAt)}`),t.push(`   情绪：${a.name}（${a.emoji}） 强度：${e.intensity}/10`),t.push(`   触发：${e.triggers.length?e.triggers.join("、"):"无"}`),t.push(`   笔记：${e.note||"（无）"}`),t.push("")}),Rt(`xinj-diary-${Date.now()}.txt`,t.join(`
`),"text/plain;charset=utf-8"),S("已导出 TXT 文件")}function q(t,e,s,a,o,i,l=4){const u=String(e||"").split("");let g="",d=0;for(let p=0;p<u.length;p++){const r=g+u[p];if(t.measureText(r).width>o&&g){if(t.fillText(g,s,a),g=u[p],a+=i,d+=1,d>=l-1){let m=u.slice(p).join("");for(;t.measureText(m+"…").width>o&&m.length>1;)m=m.slice(0,-1);return t.fillText(m+"…",s,a),a+i}}else g=r}return g&&(t.fillText(g,s,a),a+=i),a}function Ut(t,e,s,a,o){if(t.save(),t.globalAlpha=.18,t.strokeStyle=s,t.fillStyle=s,e==="sun"){t.beginPath(),t.arc(a-110,130,54,0,Math.PI*2),t.fill();for(let i=0;i<12;i++){const l=Math.PI*2*i/12;t.beginPath(),t.moveTo(a-110+Math.cos(l)*68,130+Math.sin(l)*68),t.lineTo(a-110+Math.cos(l)*92,130+Math.sin(l)*92),t.lineWidth=6,t.stroke()}}else if(e==="wave"){t.lineWidth=5;for(let i=0;i<4;i++){t.beginPath();const l=o-180-i*28;t.moveTo(40,l);for(let u=40;u<a-40;u+=20)t.quadraticCurveTo(u+10,l+(i%2?16:-16),u+20,l);t.stroke()}}else if(e==="moon")t.beginPath(),t.arc(a-120,140,58,.45,Math.PI*1.85),t.arc(a-92,122,46,Math.PI*1.55,Math.PI*.55,!0),t.closePath(),t.fill();else if(e==="rain"){t.lineWidth=4;for(let i=0;i<18;i++){const l=80+i%6*70,u=90+Math.floor(i/6)*70;t.beginPath(),t.moveTo(l,u),t.lineTo(l-8,u+28),t.stroke()}}else if(e==="ember")for(let i=0;i<7;i++){const l=a-160+i%3*36,u=100+Math.floor(i/3)*40;t.beginPath(),t.moveTo(l,u+28),t.quadraticCurveTo(l-12,u+8,l,u-10),t.quadraticCurveTo(l+12,u+8,l,u+28),t.fill()}else e==="sprout"?(t.lineWidth=6,t.beginPath(),t.moveTo(a-120,210),t.quadraticCurveTo(a-120,140,a-90,110),t.stroke(),t.beginPath(),t.ellipse(a-150,130,28,16,-.6,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a-95,145,26,14,.5,0,Math.PI*2),t.fill()):e==="bolt"?(t.beginPath(),t.moveTo(a-100,70),t.lineTo(a-145,145),t.lineTo(a-118,145),t.lineTo(a-160,230),t.lineTo(a-95,140),t.lineTo(a-122,140),t.closePath(),t.fill()):(t.beginPath(),t.ellipse(a-120,140,42,22,-.8,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a-160,175,34,18,.5,0,Math.PI*2),t.fill());t.restore()}function ge(){const t=Ot(),e=t.topMood||y("calm"),s=U[e.id]||U.calm,a=Pt(n.entries),o=Math.max(...a.map($=>$.avg),1),i=new Date,l=new Date;l.setDate(i.getDate()-6);const u=`${l.getMonth()+1}/${l.getDate()} - ${i.getMonth()+1}/${i.getDate()}`,g=900,d=1350,p=document.createElement("canvas");p.width=g,p.height=d;const r=p.getContext("2d"),m=r.createLinearGradient(0,0,g,d);m.addColorStop(0,s.bg0),m.addColorStop(1,s.bg1),r.fillStyle=m,r.fillRect(0,0,g,d),r.fillStyle=s.accent,r.globalAlpha=.08,r.beginPath(),r.arc(120,220,160,0,Math.PI*2),r.fill(),r.beginPath(),r.arc(g-80,d-200,200,0,Math.PI*2),r.fill(),r.globalAlpha=1,Ut(r,s.motif,s.accent,g,d),r.fillStyle=s.ink,r.font="700 42px 'Fraunces', 'Microsoft YaHei', sans-serif",r.fillText("心迹",64,90),r.fillStyle=s.soft,r.font="400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText("情绪周报 · "+u,64,128),r.fillStyle=s.accent,r.globalAlpha=.15,I(r,64,160,180,42,21),r.fill(),r.globalAlpha=1,r.fillStyle=s.accent,r.font="600 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText(s.tag,84,188),r.font="120px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif",r.fillText(e.emoji,64,340),r.fillStyle=s.ink,r.font="700 64px 'Fraunces', 'Microsoft YaHei', sans-serif",r.fillText(e.name,210,320),r.fillStyle=s.soft,r.font="400 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText("本周主导情绪",210,360),r.fillStyle=s.panel,I(r,64,400,g-128,160,28),r.fill(),r.fillStyle=s.ink,r.font="600 34px 'Fraunces', 'Microsoft YaHei', sans-serif",q(r,t.headline,96,460,g-200,44,3),[{label:"本周记录",value:String(t.week.length)},{label:"平均感受强度",value:t.avgIntensity?String(t.avgIntensity):"-"},{label:"主触发点",value:t.topTrigger?t.topTrigger.name:"-"}].forEach(($,x)=>{const M=64+x*268;r.fillStyle=s.panel,I(r,M,590,248,130,24),r.fill(),r.fillStyle=s.accent;const C=$.value.length>8?"700 26px 'Fraunces', 'Microsoft YaHei', sans-serif":$.value.length>5?"700 32px 'Fraunces', 'Microsoft YaHei', sans-serif":"700 40px 'Fraunces', 'Microsoft YaHei', sans-serif";r.font=C,q(r,$.value,M+24,650,200,30,2),r.fillStyle=s.soft,r.font="400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText($.label,M+24,696)}),r.fillStyle=s.panel,I(r,64,750,g-128,260,28),r.fill(),r.fillStyle=s.ink,r.font="600 28px 'Fraunces', 'Microsoft YaHei', sans-serif",r.fillText("本周趋势",96,800);const f=96,v=820,w=g-192,h=140,E=w/a.length-12;if(a.forEach(($,x)=>{const M=Math.max(10,$.avg/o*h),C=f+x*(E+12),_=v+h-M,z=r.createLinearGradient(C,_,C,_+M);z.addColorStop(0,s.accent),z.addColorStop(1,s.bg1),r.fillStyle=z,I(r,C,_,E,M,10),r.fill(),r.fillStyle=s.soft,r.font="400 16px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText($.label.slice($.label.indexOf("/")+1),C+E/2-8,v+h+28)}),r.fillStyle=s.ink,r.font="500 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",q(r,s.tip,64,1080,g-128,36,2),t.moodRank.length){r.fillStyle=s.soft,r.font="400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif";const $=t.moodRank.slice(0,4).map(x=>`${x.emoji}${x.name}×${x.count}`).join("  ");r.fillText($,64,1160)}return r.fillStyle=s.soft,r.font="400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",r.fillText("心迹 · 记录情绪，温柔对待自己",64,d-56),{canvas:p,mood:e,theme:s}}function I(t,e,s,a,o,i){const l=Math.min(i,a/2,o/2);t.beginPath(),t.moveTo(e+l,s),t.arcTo(e+a,s,e+a,s+o,l),t.arcTo(e+a,s+o,e,s+o,l),t.arcTo(e,s+o,e,s,l),t.arcTo(e,s,e+a,s,l),t.closePath()}function F(){const t=document.querySelector(".card-modal");t&&t.remove(),document.body.style.overflow=""}function Bt(t){if(!t.length)return y("calm");const e={};t.forEach(a=>{e[a.moodId]=(e[a.moodId]||0)+1});const s=Object.entries(e).sort((a,o)=>o[1]-a[1])[0][0];return y(s)}const H=[{id:"7",days:7,label:"近一周",short:"一周"},{id:"15",days:15,label:"近半个月",short:"半月"},{id:"30",days:30,label:"近一个月",short:"一月"}];function me(t){return H.find(e=>e.id===t)||H[0]}function Gt(t){const e=new Date,s=new Date;return s.setHours(0,0,0,0),s.setDate(s.getDate()-(t-1)),`${s.getMonth()+1}/${s.getDate()} - ${e.getMonth()+1}/${e.getDate()}`}function he(t=H[0]){const e=G(t.days),s=Bt(e),a=U[s.id]||U.calm,o=e.length?+(e.reduce((h,E)=>h+E.intensity,0)/e.length).toFixed(1):0,i=P(),l=e[0],u={};e.forEach(h=>{u[h.moodId]=(u[h.moodId]||0)+1});const g=Object.entries(u).map(([h,E])=>({...y(h),count:E})).sort((h,E)=>E.count-h.count).slice(0,4),d=Gt(t.days),p=900,r=1200,m=document.createElement("canvas");m.width=p,m.height=r;const c=m.getContext("2d"),f=c.createLinearGradient(0,0,p,r);f.addColorStop(0,a.bg0),f.addColorStop(1,a.bg1),c.fillStyle=f,c.fillRect(0,0,p,r),c.fillStyle=a.accent,c.globalAlpha=.08,c.beginPath(),c.arc(140,200,150,0,Math.PI*2),c.fill(),c.beginPath(),c.arc(p-60,r-160,180,0,Math.PI*2),c.fill(),c.globalAlpha=1,Ut(c,a.motif,a.accent,p,r),c.fillStyle=a.ink,c.font="700 42px 'Fraunces', 'Microsoft YaHei', sans-serif",c.fillText("心迹",64,90),c.fillStyle=a.soft,c.font="400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText(`情绪日记 · ${t.label} · ${d}`,64,128),c.fillStyle=a.accent,c.globalAlpha=.15,I(c,64,160,180,42,21),c.fill(),c.globalAlpha=1,c.fillStyle=a.accent,c.font="600 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText(a.tag,84,188),c.font="120px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif",c.fillText(s.emoji,64,340),c.fillStyle=a.ink,c.font="700 64px 'Fraunces', 'Microsoft YaHei', sans-serif",c.fillText(s.name,210,320),c.fillStyle=a.soft,c.font="400 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText(`${t.label}主导情绪`,210,360),c.fillStyle=a.panel,I(c,64,400,p-128,150,28),c.fill(),c.fillStyle=a.ink,c.font="600 30px 'Fraunces', 'Microsoft YaHei', sans-serif";const v=l!=null&&l.note?`最近一次：${l.note}`:e.length?`${t.label}留下 ${e.length} 段情绪足迹，继续温柔记录。`:`${t.label}还没有记录。`;return q(c,v,96,460,p-200,40,3),[{label:"时段记录",value:String(e.length)},{label:"平均感受强度",value:o||"-"},{label:"连续签到",value:`${i}天`}].forEach((h,E)=>{const $=64+E*268;c.fillStyle=a.panel,I(c,$,580,248,130,24),c.fill(),c.fillStyle=a.accent,c.font="700 40px 'Fraunces', 'Microsoft YaHei', sans-serif",c.fillText(String(h.value),$+24,650),c.fillStyle=a.soft,c.font="400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText(h.label,$+24,686)}),c.fillStyle=a.panel,I(c,64,740,p-128,220,28),c.fill(),c.fillStyle=a.ink,c.font="600 28px 'Fraunces', 'Microsoft YaHei', sans-serif",c.fillText("情绪分布",96,790),g.length?g.forEach((h,E)=>{const $=830+E*32;c.font="400 24px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillStyle=a.ink,c.fillText(`${h.emoji}  ${h.name}`,96,$),c.fillStyle=a.soft,c.fillText(`×${h.count}`,p-140,$)}):(c.fillStyle=a.soft,c.font="400 22px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText("该时段暂无分布数据",96,850)),c.fillStyle=a.ink,c.font="500 26px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",q(c,a.tip,64,1020,p-128,36,2),c.fillStyle=a.soft,c.font="400 20px 'Noto Sans SC', 'Microsoft YaHei', sans-serif",c.fillText("心迹 · 记录情绪，温柔对待自己",64,r-56),{canvas:m,mood:s,theme:a,range:t}}function Jt(t="week",e=H[0]){const s=t==="diary"?he(e):ge(),{canvas:a,mood:o,theme:i}=s,l=a.toDataURL("image/png"),u=t==="diary"?`日记卡片预览 · ${e.label}`:"周报卡片预览",g=t==="diary"?"情绪日记卡片":"情绪周报卡片",d=t==="diary"?`xinj-diary-card-${e.id}d`:"xinj-week-card",p=t==="diary"?`${e.label}日记卡片`:"周报卡片";F(),document.body.style.overflow="hidden";const r=document.createElement("div");r.className="card-modal",r.innerHTML=`
    <div class="card-modal-backdrop" data-close-card></div>
    <div class="card-modal-panel" style="--card-accent:${i.accent}">
      <div class="card-modal-head">
        <div>
          <strong>${u}</strong>
          <p>样式已按主导情绪「${o.emoji} ${o.name}」渲染</p>
        </div>
        <button class="btn-ghost" data-close-card type="button">关闭</button>
      </div>
      <div class="card-modal-preview">
        <img src="${l}" alt="${g}" />
      </div>
      <div class="action-row" style="justify-content:flex-end;">
        ${t==="diary"?'<button class="btn-ghost" data-back-diary-range type="button">重选时段</button>':""}
        <button class="btn-ghost" data-close-card type="button">取消</button>
        <button class="btn-primary" data-download-card type="button">下载 PNG</button>
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelectorAll("[data-close-card]").forEach(f=>{f.addEventListener("click",F)});const m=r.querySelector("[data-back-diary-range]");m&&m.addEventListener("click",()=>{F(),Wt()});const c=r.querySelector("[data-download-card]");c&&c.addEventListener("click",()=>{const f=document.createElement("a");f.href=l,f.download=`${d}-${o.id}-${Date.now()}.png`,f.click(),S(`已导出「${o.name}」主题${p}`),F()})}function ve(){Jt("week")}function Wt(){if(!n.entries.length){S("还没有日记，先去记录一条吧");return}F(),document.body.style.overflow="hidden";const t=document.createElement("div");t.className="card-modal",t.innerHTML=`
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
        ${H.map(e=>{const s=G(e.days).length,a=Gt(e.days);return`
            <button class="range-option" type="button" data-diary-range="${e.id}">
              <div>
                <strong>导出${e.label}</strong>
                <span>${a}</span>
              </div>
              <em>${s} 条</em>
            </button>`}).join("")}
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelectorAll("[data-close-card]").forEach(e=>{e.addEventListener("click",F)}),t.querySelectorAll("[data-diary-range]").forEach(e=>{e.addEventListener("click",()=>{const s=me(e.getAttribute("data-diary-range"));if(!G(s.days).length){S(`${s.label}还没有记录`);return}Jt("diary",s)})})}function be(){Wt()}function ye(){const t=[["home","首页"],["record","记录"],["care","关怀"],["breathe","呼吸"],["insight","洞察"],["diary","日记"],["report","周报"]];return`
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">心迹</div>
        <div class="brand-sub">情绪日记与自我关怀</div>
      </div>
      <div class="topbar-right">
        <div class="user-chip">
          <span class="dot"></span>
          <strong>${n.user?n.user.name:n.guest?"体验中":"未登录"}</strong>
          ${n.user?'<button type="button" data-logout>退出</button>':'<button type="button" data-goto-auth>登录</button>'}
        </div>
        <nav class="nav" aria-label="任务流程导航">
          ${t.map(([s,a])=>`<button data-nav="${s}" class="${n.view===s?"active":""}">${a}</button>`).join("")}
        </nav>
      </div>
    </header>
  `}function $t(){const t=n.entries[0],e=t?y(t.moodId):null,s=P(),a=jt();return`
    <section class="hero">
      <div class="hero-copy">
        <div class="streak-row">
          <div class="streak-pill ${a?"ok":""}">
            <span>连续签到</span>
            <strong>${s}</strong>
            <span>天</span>
          </div>
          <div class="streak-pill ${a?"ok":""}">
            ${a?"今日已记录 ✓":"今日还未记录"}
          </div>
        </div>
        <h1>把情绪写下来，再温柔对待自己</h1>
        <p>面对学业、职场与社交压力时，用 30 秒完成一次低门槛记录，看清触发因素，并获得可马上做的自我调节方案。</p>
        <div class="cta-row">
          <button class="btn-primary" data-nav="record">${a?"再记一条":"开始今日签到"}</button>
          <button class="btn-ghost" data-nav="breathe">先做一轮呼吸</button>
        </div>
      </div>
      <div class="hero-panel">
        <h2>此刻感觉如何？</h2>
        <p>${e?`上次你记录了「${e.name}」，强度 ${t.intensity}/10。`:"点选一个情绪，快速进入记录。"}</p>
        <div class="mood-mini">
          ${R.map(o=>`<button data-quick="${o.id}" title="${o.name}">${o.emoji}</button>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>今日建议路径</h2>
          <p>记录 → 关怀 → 呼吸 → 洞察 → 日记 → 周报</p>
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
            <span class="tag">02 呼吸</span>
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
  `}function $e(){const t=n.draft,e=Lt();return`
    <section class="section">
      <div class="section-head">
        <div>
          <h2>记录这一刻</h2>
          <p>真实就好，没有对错 · 连续签到 ${P()} 天 · 约 30 秒</p>
        </div>
      </div>
      <div class="card record-main record-solo">
        <div class="field">
          <label>此刻情绪</label>
          <div class="mood-grid">
            ${R.map(s=>`
              <button type="button" class="mood-opt ${t.moodId===s.id?"selected":""}" data-mood="${s.id}" aria-label="${s.name}">
                <span class="emoji" aria-hidden="true">${s.emoji}</span>
                <span class="name" aria-hidden="true">${s.name}</span>
              </button>`).join("")}
          </div>
        </div>
        <div class="field">
          <label>情绪强度 <span class="field-hint">感受有多强烈，不是好坏</span></label>
          <div class="range-row">
            <input type="range" min="1" max="10" value="${t.intensity}" data-intensity />
            <div class="intensity-val">${t.intensity}/10</div>
          </div>
          <p class="field-note" data-intensity-hint>${rt(t.moodId)}</p>
        </div>
        <div class="field">
          <label>可能的触发因素（可多选）</label>
          <div class="chips">
            ${e.map(s=>{const a=n.customTriggers.includes(s);return`<button type="button" class="chip ${t.triggers.includes(s)?"on":""} ${a?"custom":""}" data-trigger="${s}">
                  ${s}${a?`<span class="chip-x" data-remove-trigger="${s}" title="删除">×</span>`:""}
                </button>`}).join("")}
          </div>
            <div class="trigger-add">
              <input data-custom-trigger type="text" maxlength="20" placeholder="自定义触发，如：被催进度" title="添加我的触发因素，例如：被催进度" value="${t.customInput||""}" />
              <button class="btn-soft" data-add-trigger type="button">添加</button>
            </div>
        </div>
        <div class="field">
          <label>想说的话（可选）</label>
          <textarea data-note placeholder="发生了什么？身体有什么感觉？">${t.note}</textarea>
        </div>
        <button class="btn-primary" data-save type="button">保存并获取关怀建议</button>
        <p class="record-next-hint">保存后可去「关怀」写三件好事，或做一轮「呼吸」调节。</p>
      </div>
    </section>
  `}function Se(){var i;const t=Ht(n.entries),e=Pt(n.entries),s=Math.max(...e.map(l=>l.avg),1),a=n.entries.length?(n.entries.reduce((l,u)=>l+u.intensity,0)/n.entries.length).toFixed(1):"-",o=((i=t[0])==null?void 0:i.name)||"暂无";return new Set(n.entries.map(l=>l.moodId)).size,`
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪洞察</h2>
          <p>从记录里看见反复出现的模式</p>
        </div>
        <button class="btn-ghost" data-nav="report">查看本周周报</button>
      </div>
      <div class="stats">
        <div class="stat"><strong>${n.entries.length}</strong><span>累计记录</span></div>
        <div class="stat"><strong>${a}</strong><span>平均感受强度</span></div>
        <div class="stat"><strong>${P()}</strong><span>连续签到</span></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">近 7 日情绪趋势</h3>
          <div class="chart">
            ${e.map(l=>`
              <div class="col">
                <div class="pill" style="height:${Math.max(8,l.avg/s*100)}%"></div>
                <small>${l.label.slice(l.label.indexOf("/")+1)}</small>
              </div>`).join("")}
          </div>
          <p style="margin-top:10px;color:var(--ink-soft);font-size:0.88rem;">柱越高代表当天情绪更偏积极/稳定。</p>
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">高频触发因素</h3>
          ${t.length===0?'<div class="empty">还没有足够数据，先去记录几次吧。</div>':`<div class="insight-list">
                ${t.slice(0,6).map(l=>{const u=y(l.topMood),g=Math.min(100,l.count*28);return`
                    <div class="insight">
                      <div>${u.emoji}</div>
                      <div>
                        <strong>${l.name}</strong>
                        <div class="bar"><span style="width:${g}%"></span></div>
                        <div style="font-size:0.78rem;color:var(--ink-soft);margin-top:4px;">常伴随「${u.name}」</div>
                      </div>
                      <div style="text-align:right;font-size:0.82rem;">${l.count}次<br/>均强 ${l.avg}</div>
                    </div>`}).join("")}
              </div>`}
          <p style="margin-top:12px;color:var(--ink-soft);font-size:0.88rem;">当前最值得关注的触发点：<strong>${o}</strong></p>
        </div>
      </div>
    </section>
  `}function we(t,e,s){return n.entries.filter(a=>{const o=new Date(a.createdAt);return o.getFullYear()===t&&o.getMonth()===e&&o.getDate()===s})}function Ee(t,e){const s=new Date(t,e,1).getDay(),a=new Date(t,e+1,0).getDate(),o=new Date,i=[];for(let l=0;l<s;l++)i.push({empty:!0});for(let l=1;l<=a;l++){const u=we(t,e,l),g=u.length?Bt(u):null;i.push({empty:!1,day:l,mood:g,count:u.length,isToday:o.getFullYear()===t&&o.getMonth()===e&&o.getDate()===l,inWeek:(()=>{const d=new Date(t,e,l);d.setHours(0,0,0,0);const p=new Date;p.setHours(0,0,0,0);const r=new Date(p);return r.setDate(p.getDate()-6),d>=r&&d<=p})()})}for(;i.length%7!==0;)i.push({empty:!0});return i}function St(t){let{year:e,month:s}=n.calendarCursor;s+=t,s<0?(s=11,e-=1):s>11&&(s=0,e+=1),n.calendarCursor={year:e,month:s},b()}function De(){const t=new Date;n.calendarCursor={year:t.getFullYear(),month:t.getMonth()},b()}function Ie(){const t=Ot(),e=ie(),{year:s,month:a}=n.calendarCursor,o=Ee(s,a),i=`${s}年${a+1}月`,l=new Date,u=new Date;u.setDate(l.getDate()-6);const g=["日","一","二","三","四","五","六"];return`
    <section class="section">
      <div class="section-head">
        <div>
          <h2>情绪周报</h2>
          <p>${u.getMonth()+1}/${u.getDate()} - ${l.getMonth()+1}/${l.getDate()} · 日历一眼看心情</p>
        </div>
        <div class="action-row">
          <button class="btn-primary" data-export-card>导出为卡片</button>
        </div>
      </div>

      <div class="card mood-calendar">
        <div class="cal-toolbar">
          <button class="btn-ghost cal-nav" type="button" data-cal-prev aria-label="上个月">‹</button>
          <div class="cal-title">
            <strong>${i}</strong>
            <span>日期下方是当天主导心情</span>
          </div>
          <div class="cal-actions">
            <button class="btn-soft" type="button" data-cal-today>今天</button>
            <button class="btn-ghost cal-nav" type="button" data-cal-next aria-label="下个月">›</button>
          </div>
        </div>
        <div class="cal-weekdays">
          ${g.map(d=>`<span>${d}</span>`).join("")}
        </div>
        <div class="cal-grid">
          ${o.map(d=>d.empty?'<div class="cal-cell empty"></div>':`
                <div class="${["cal-cell",d.isToday?"today":"",d.inWeek?"in-week":"",d.mood?"has-mood":""].filter(Boolean).join(" ")}" title="${d.mood?d.mood.name:"暂无记录"}">
                  <span class="cal-day">${d.day}</span>
                  <span class="cal-mood">${d.mood?d.mood.emoji:"·"}</span>
                  ${d.count>1?`<span class="cal-count">${d.count}</span>`:""}
                </div>`).join("")}
        </div>
        <div class="cal-legend">
          <span><i class="dot today"></i>今天</span>
          <span><i class="dot week"></i>近 7 天</span>
          <span>有记录的日子会显示心情符号</span>
        </div>
      </div>

      <div class="card week-compare" style="margin-top:14px;">
        <div class="compare-head">
          <div>
            <h3>上周 vs 本周</h3>
            <p>上周 ${e.lastLabel} · 本周 ${e.thisLabel}</p>
          </div>
          <div class="compare-legend">
            <span><i class="swatch prev"></i>上周</span>
            <span><i class="swatch curr"></i>本周</span>
          </div>
        </div>
        <div class="compare-metrics">
          ${e.metrics.map(d=>{const p=Math.max(8,Number(d.prev)/d.max*100),r=Math.max(8,Number(d.curr)/d.max*100),m=d.better===null?"neutral":d.better?"up":"down";return`
              <div class="compare-metric">
                <div class="compare-metric-label">
                  <strong>${d.label}</strong>
                  ${d.hint?`<small>${d.hint}</small>`:""}
                </div>
                <div class="compare-pair">
                  <div class="compare-bar-wrap" title="上周 ${d.prev}${d.unit||""}">
                    <div class="compare-bar prev" style="height:${p}%"></div>
                    <span>${d.prev}${d.unit||""}</span>
                  </div>
                  <div class="compare-bar-wrap" title="本周 ${d.curr}${d.unit||""}">
                    <div class="compare-bar curr" style="height:${r}%"></div>
                    <span>${d.curr}${d.unit||""}</span>
                  </div>
                </div>
                <div class="compare-delta ${m}">${d.delta}</div>
              </div>`}).join("")}
        </div>
        <div class="compare-trend">
          <h4>按日情绪平稳分对比</h4>
          <div class="compare-chart">
            ${e.thisDays.map((d,p)=>{const r=e.lastDays[p],m=Math.max(6,d.avg/e.maxAvg*100),c=Math.max(6,((r==null?void 0:r.avg)||0)/e.maxAvg*100);return`
                <div class="compare-day">
                  <div class="compare-day-bars">
                    <div class="pill prev" style="height:${r!=null&&r.avg?c:6}%"></div>
                    <div class="pill curr" style="height:${d.avg?m:6}%"></div>
                  </div>
                  <small>${d.weekday}</small>
                </div>`}).join("")}
          </div>
        </div>
        <div class="compare-notes">
          ${e.notes.map(d=>`<p>${d}</p>`).join("")}
        </div>
      </div>

      <div class="stats stats-4" style="margin-top:14px;">
        <div class="stat"><strong>${t.week.length}</strong><span>本周记录</span></div>
        <div class="stat"><strong>${t.avgIntensity||"-"}</strong><span>平均感受强度</span></div>
        <div class="stat"><strong>${t.topMood?t.topMood.emoji+t.topMood.name:"-"}</strong><span>主导情绪</span></div>
        <div class="stat"><strong>${t.topTrigger?t.topTrigger.name:"-"}</strong><span>主触发点</span></div>
      </div>

      <div class="grid-2" style="margin-top:14px;">
        <div class="card">
          <div class="report-quote">${t.headline}</div>
          <div class="report-body">
            ${t.body.map(d=>`<p>${d}</p>`).join("")}
          </div>
          ${t.moodRank.length?`<div class="mood-mix">${t.moodRank.slice(0,5).map(d=>`<span>${d.emoji} ${d.name} ×${d.count}</span>`).join("")}</div>`:""}
        </div>
        <div class="card">
          <h3 style="font-family:var(--font-display);margin-bottom:10px;">高频触发 Top3</h3>
          ${t.triggers.length===0?'<div class="empty">本周暂无触发数据</div>':`<div class="insight-list">
                ${t.triggers.slice(0,3).map(d=>`<div class="insight">
                      <div>${y(d.topMood).emoji}</div>
                      <div><strong>${d.name}</strong><div class="bar"><span style="width:${Math.min(100,d.count*30)}%"></span></div></div>
                      <div style="font-size:0.82rem;">${d.count}次</div>
                    </div>`).join("")}
              </div>`}
          <div class="action-row" style="margin-top:16px;">
            <button class="btn-soft" data-nav="breathe">用呼吸收尾这周</button>
            <button class="btn-ghost" data-nav="record">补一条记录</button>
          </div>
        </div>
      </div>
    </section>
  `}function Ae(){const t=n.entries[0],e=y(t?t.moodId:"calm"),s=re(e.id),a=Ft(n.goodsDraft),o=Zt(7).reduce((i,l)=>i+l.items.length,0);return`
    <section class="section">
      <div class="section-head">
        <div>
          <h2>自我关怀方案</h2>
          <p>基于「${e.emoji} ${e.name}」为你推荐 · 先调节，再回访感受强度</p>
        </div>
        <button class="btn-ghost" data-nav="breathe">打开呼吸引导</button>
      </div>
      <div class="card goods-care-card">
        <div class="section-head" style="margin-bottom:8px;padding:0;">
          <div>
            <h3 style="font-family:var(--font-display);font-size:1.2rem;">今日三件好事</h3>
            <p class="goods-progress">今日已写 <strong>${a}/3</strong>${o?` · 近7天共 ${o} 件`:""}</p>
          </div>
        </div>
        <div class="goods-box goods-box-grid">
          ${_t.map((i,l)=>`
            <label class="goods-item">
              <span>${l+1}. ${i}</span>
              <input data-goods-input="${l}" type="text" maxlength="60" placeholder="写下一件就好" value="${te(n.goodsDraft[l]||"")}" />
            </label>`).join("")}
        </div>
        <button class="btn-primary" data-save-goods type="button" style="margin-top:12px;">${a>=3?"更新三件好事":"收好这些好事"}</button>
      </div>
      <div class="grid-3" style="margin-top:14px;">
        ${s.map(i=>`
          <article class="card care-card">
            <div>
              <span class="tag">${i.type}</span>
              <h3>${i.title}</h3>
              <p>${i.desc}</p>
            </div>
            <div class="meta">
              <span>约 ${i.mins} 分钟</span>
              ${i.breathe?`<button class="btn-soft" data-start-breathe="${i.breathe}">跟练呼吸</button>`:`<button class="btn-soft" data-done="${i.title}">我做完了</button>`}
            </div>
          </article>`).join("")}
      </div>
      <p class="disclaimer">心迹是自我觉察与日常调节工具，不能替代专业心理咨询或医疗诊断。若持续痛苦或有自伤风险，请寻求专业帮助。</p>
    </section>
  `}function xe(){const t=n.followUp;if(!t)return'<section class="section"><div class="card empty">没有进行中的回访，去完成一个关怀方案吧。<div style="margin-top:12px;"><button class="btn-soft" data-nav="care">回到关怀</button></div></div></section>';const e=y(t.moodId),s=lt(t.moodId,t.before,t.after);return`
    <section class="section">
      <div class="section-head">
        <div>
          <h2>调节后回访</h2>
          <p>刚完成「${t.activity}」，现在「${e.emoji} ${e.name}」的感受有多强烈？</p>
        </div>
      </div>
      <div class="card" style="max-width:560px;margin:0 auto;">
        <p class="field-note" style="margin-bottom:14px;">${rt(t.moodId)}</p>
        <div class="follow-compare">
          <div class="follow-box">
            <div class="num">${t.before}</div>
            <div class="lbl">调节前感受强度</div>
          </div>
          <div class="follow-arrow">→</div>
          <div class="follow-box">
            <div class="num">${t.after}</div>
            <div class="lbl">现在感受强度</div>
          </div>
        </div>
        <div class="field">
          <label>拖动记录现在的感受强度</label>
          <div class="range-row">
            <input type="range" min="1" max="10" value="${t.after}" data-follow-after />
            <div class="intensity-val">${t.after}/10</div>
          </div>
        </div>
        <p style="text-align:center;margin:8px 0 16px;" class="${s.cls}" data-follow-delta>${s.line}</p>
        <div class="action-row" style="justify-content:center;">
          <button class="btn-ghost" data-nav="care">跳过</button>
          <button class="btn-primary" data-save-followup>保存回访</button>
        </div>
      </div>
    </section>
  `}function Me(){const t=k[n.breathe.mode],e=t.phases[n.breathe.phaseIndex],s=n.breathe.running?e.seconds:4,a=n.breathe.running?n.breathe.phaseClass:"idle",o=n.breathe.running?e.label:"准备开始",i=n.breathe.running?`${t.name} · 第 ${n.breathe.round}/${t.rounds} 轮`:t.desc;return`
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
            ${Object.entries(k).map(([l,u])=>`<button class="mode-chip ${n.breathe.mode===l?"on":""}" data-breathe-mode="${l}">${u.name}</button>`).join("")}
          </div>
          <div class="breathe-stage">
            <div
              class="breathe-ring ${a}"
              data-breathe-ring
              style="--phase-ms:${s}s"
            ></div>
            <div class="breathe-label" data-breathe-label>${o}</div>
            <div class="breathe-sub" data-breathe-sub>${i}</div>
            <div class="breathe-meta">
              <span>轮次 <strong data-breathe-round>${n.breathe.round}/${t.rounds}</strong></span>
              <span>倒计时 <strong data-breathe-left>${n.breathe.running?n.breathe.secondsLeft+"s":"-"}</strong></span>
            </div>
          </div>
          <div class="action-row" style="justify-content:center;">
            ${n.breathe.running?'<button class="btn-ghost" data-stop-breathe>结束练习</button>':`<button class="btn-primary" data-start-breathe="${n.breathe.mode}">开始 ${t.name}</button>`}
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
  `}function ke(){const t=N(n.entries);return`
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
        ${t.length===0?'<div class="empty">还没有日记，从一次小记录开始。</div>':t.map(e=>{const s=y(e.moodId);return`
                  <article class="entry">
                    <div class="emoji">${s.emoji}</div>
                    <div>
                      <h4>${s.name} · 强度 ${e.intensity}/10</h4>
                      <div class="note">${e.note||"（未写文字，只留下了情绪痕迹）"}</div>
                      ${e.afterIntensity!=null?`<div class="after">调节后 ${e.afterIntensity}/10${e.careActivity?` · ${e.careActivity}`:""}</div>`:""}
                      <div class="tags">${e.triggers.map(a=>`<span>${a}</span>`).join("")}</div>
                    </div>
                    <div class="time">${oe(e.createdAt)}</div>
                  </article>`}).join("")}
      </div>
    </section>
  `}function b(){const t=document.getElementById("app");if(n.view==="auth"||!n.user&&!n.guest){D("auth"),t.innerHTML=`
      ${ne()}
      <div class="toast ${n.toast?"show":""}">${n.toast}</div>
    `,Te();return}ot(n.view);const e={home:$t,record:$e,insight:Se,report:Ie,care:Ae,breathe:Me,followup:xe,diary:ke};t.innerHTML=`
    <div class="app-shell">
      ${ye()}
      ${(e[n.view]||$t)()}
    </div>
    <div class="toast ${n.toast?"show":""}">${n.toast}</div>
  `,Ce()}function Te(){document.querySelectorAll("[data-auth-tab]").forEach(s=>{s.addEventListener("click",()=>{n.authTab=s.getAttribute("data-auth-tab"),n.authError="",b()})}),document.querySelectorAll("[data-auth-field]").forEach(s=>{s.addEventListener("input",a=>{const o=s.getAttribute("data-auth-field");n.authForm[o]=a.target.value}),s.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),n.authTab==="login"?pt():ft())})});const t=document.querySelector("[data-auth-submit]");t&&t.addEventListener("click",()=>{n.authTab==="login"?pt():ft()});const e=document.querySelector("[data-auth-guest]");e&&e.addEventListener("click",ae)}function Ce(){document.querySelectorAll("[data-nav]").forEach(f=>{f.addEventListener("click",()=>st(f.getAttribute("data-nav")))}),document.querySelectorAll(".mood-grid, .chips, .nav, .mood-mini, .mode-chips").forEach(f=>{f.addEventListener("selectstart",v=>v.preventDefault()),f.addEventListener("dragstart",v=>v.preventDefault()),f.addEventListener("contextmenu",v=>{v.target.closest("button, .mood-opt, .chip")&&v.preventDefault()})});const t=document.querySelector("[data-logout]");t&&t.addEventListener("click",se);const e=document.querySelector("[data-goto-auth]");e&&e.addEventListener("click",()=>{D("auth"),n.authError="",b()}),document.querySelectorAll("[data-quick]").forEach(f=>{f.addEventListener("click",()=>{n.draft.moodId=f.getAttribute("data-quick"),n.recordTipIndex=0,st("record")})}),document.querySelectorAll("[data-mood]").forEach(f=>{f.addEventListener("contextmenu",v=>v.preventDefault()),f.addEventListener("click",()=>{const v=f.getAttribute("data-mood");n.draft.moodId=v,document.querySelectorAll("[data-mood]").forEach(h=>{h.classList.toggle("selected",h.getAttribute("data-mood")===v)});const w=document.querySelector("[data-intensity-hint]");w&&(w.textContent=rt(v))})}),document.querySelectorAll("[data-trigger]").forEach(f=>{f.addEventListener("contextmenu",v=>v.preventDefault()),f.addEventListener("click",v=>{if(v.target.closest("[data-remove-trigger]"))return;const w=f.getAttribute("data-trigger"),h=new Set(n.draft.triggers);h.has(w)?h.delete(w):h.add(w),n.draft.triggers=[...h],f.classList.toggle("on",h.has(w))})}),document.querySelectorAll("[data-remove-trigger]").forEach(f=>{f.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),ce(f.getAttribute("data-remove-trigger"))})});const s=document.querySelector("[data-custom-trigger]");s&&(s.addEventListener("input",f=>{n.draft.customInput=f.target.value}),s.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),yt(s.value))}));const a=document.querySelector("[data-add-trigger]");a&&a.addEventListener("click",()=>{const f=document.querySelector("[data-custom-trigger]");yt(f?f.value:n.draft.customInput)});const o=document.querySelector("[data-intensity]");o&&o.addEventListener("input",f=>{n.draft.intensity=f.target.value;const v=document.querySelector(".intensity-val");v&&(v.textContent=`${f.target.value}/10`)});const i=document.querySelector("[data-follow-after]");i&&i.addEventListener("input",f=>{if(!n.followUp)return;n.followUp.after=f.target.value;const v=document.querySelector(".intensity-val");v&&(v.textContent=`${f.target.value}/10`);const w=document.querySelectorAll(".follow-box .num")[1];w&&(w.textContent=f.target.value);const h=document.querySelector("[data-follow-delta]");if(h){const E=lt(n.followUp.moodId,n.followUp.before,f.target.value);h.textContent=E.line,h.className=E.cls,h.style.textAlign="center",h.style.margin="8px 0 16px"}});const l=document.querySelector("[data-note]");l&&l.addEventListener("input",f=>{n.draft.note=f.target.value}),document.querySelectorAll("[data-goods-input]").forEach(f=>{f.addEventListener("input",v=>{const w=Number(v.target.getAttribute("data-goods-input"));if(Number.isNaN(w))return;n.goodsDraft[w]=v.target.value;const h=document.querySelector(".goods-progress strong");h&&(h.textContent=`${Ft(n.goodsDraft)}/3`)})});const u=document.querySelector("[data-save-goods]");u&&u.addEventListener("click",Qt);const g=document.querySelector("[data-save]");g&&g.addEventListener("click",ue);const d=document.querySelector("[data-save-followup]");d&&d.addEventListener("click",de),document.querySelectorAll("[data-done]").forEach(f=>{f.addEventListener("click",()=>Yt(f.getAttribute("data-done")))}),document.querySelectorAll("[data-export-json]").forEach(f=>{f.addEventListener("click",fe)}),document.querySelectorAll("[data-export-txt]").forEach(f=>{f.addEventListener("click",pe)}),document.querySelectorAll("[data-export-card]").forEach(f=>{f.addEventListener("click",ve)}),document.querySelectorAll("[data-export-diary-card]").forEach(f=>{f.addEventListener("click",be)});const p=document.querySelector("[data-cal-prev]");p&&p.addEventListener("click",()=>St(-1));const r=document.querySelector("[data-cal-next]");r&&r.addEventListener("click",()=>St(1));const m=document.querySelector("[data-cal-today]");m&&m.addEventListener("click",De),document.querySelectorAll("[data-breathe-mode]").forEach(f=>{f.addEventListener("click",()=>{A(),n.breathe.mode=f.getAttribute("data-breathe-mode"),n.breathe.phaseIndex=0,n.breathe.round=1,n.breathe.secondsLeft=k[n.breathe.mode].phases[0].seconds,b()})}),document.querySelectorAll("[data-start-breathe]").forEach(f=>{f.addEventListener("click",()=>{const v=f.getAttribute("data-start-breathe");D("breathe"),le(v)})});const c=document.querySelector("[data-stop-breathe]");c&&c.addEventListener("click",()=>{A(),S("已结束本次呼吸练习"),b()})}window.addEventListener("hashchange",()=>{if(!n.user&&!n.guest)return;const t=qt();!t||t==="auth"||t===n.view||(t!=="breathe"&&A(),t!=="followup"&&(n.followUp=null),D(t),b(),window.scrollTo({top:0,behavior:"smooth"}))});ot(n.view);b();
