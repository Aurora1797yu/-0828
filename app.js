/* ============ 荔园文化月历 · 数据 & 逻辑 ============
   配色/交互 redesign：小清新 + 社团推荐专栏
*/
const EVENTS = [
  { id:1,  title:'第二十二届荔枝文化节', cat:'brand',    campus:'粤海+丽湖', date:'2026-06-13', month:6,
    loc:'粤海校区荔枝林', org:'校团委 / 后勤部',
    intro:'深大一年一度的"荔枝嘉年华"。校园内数千棵 80 年以上果龄的古荔枝树硕果累累，学校向全校师生免费派荔约 16 万斤，并配套游园、文化市集、文艺演出等活动，是荔园最具辨识度的文化名片。',
    tip:'凭校园卡在指定点位领取鲜荔，一人一份，先到先得；建议穿浅色衣物、做好防晒。' },
  { id:2,  title:'"大荔出骐骥"元宵文化市集', cat:'brand', campus:'粤海', date:'2026-02-12', month:2,
    loc:'粤海校区校友广场', org:'校团委 / 深大附中',
    intro:'新春开学季的重磅品牌活动，以 70 余个校内外摊位打造沉浸式元宵市集，融合非遗手作、传统游艺、粤海美食与深大文创，是校地融合、师生同乐的文化盛会。',
    tip:'市集免费入场，部分手工体验需现场扫码预约。' },
  { id:3,  title:'第九届国际文化节', cat:'brand', campus:'粤海', date:'2026-05-18', month:5,
    loc:'粤海校区北区广场', org:'国际交流与合作部',
    intro:'"荔园开 FUN，粤见未来"——汇聚深大各国留学生与中外师生，以国家展位、民族歌舞、世界美食与文化工坊，呈现荔园国际化校园的多元魅力。',
    tip:'可参与"文化护照"集章活动，集满兑换限定文创。' },
  { id:4,  title:'2026 开学典礼', cat:'brand', campus:'粤海+丽湖', date:'2026-09-12', month:9,
    loc:'两校区体育场', org:'学校办公室',
    intro:'深圳大学 2026 级新生开学典礼，校长寄语、教师代表发言、新生宣誓，正式开启你的荔园时光。',
    tip:'请提前 30 分钟按学院方阵入场，着正式服装。' },
  { id:5,  title:'2026 毕业典礼', cat:'brand', campus:'粤海+丽湖', date:'2027-06-26', month:6,
    loc:'两校区体育馆', org:'学校办公室',
    intro:'为毕业生加冕的庄重仪式，学位授予、拨穗正冠，在荔园的蝉鸣与荔枝香中，与深大说一声珍重。',
    tip:'每位毕业生可申领 2 张观礼券，具体以学院通知为准。' },
  { id:6,  title:'荔园雅集 · 诗书中秋', cat:'academic', campus:'粤海', date:'2026-09-25', month:9,
    loc:'图书馆南书房', org:'校学生会学术部',
    intro:'"把诗与秋，藏进书页里"——以古风游戏、诗歌接力、书签制作为载体的雅致文化沙龙，倡导师生走进诗书、品鉴中华文脉。',
    tip:'现场备有茶点与笔墨纸砚，欢迎即席挥毫。' },
  { id:7,  title:'荔园戏剧节 · 原创剧目展演', cat:'art', campus:'粤海', date:'2026-11-08', month:11,
    loc:'南山校区黑匣子剧场', org:'艺术学部 / 深大戏剧社',
    intro:'汇聚校内原创与经典改编剧目，由深大戏剧社、音乐剧社联袂呈现，是荔园戏剧爱好者一年一度的盛宴。',
    tip:'演出免费，凭校园卡入场，座位有限。' },
  { id:8,  title:'新年音乐会', cat:'art', campus:'粤海', date:'2026-12-30', month:12,
    loc:'粤海校区国际会议厅', org:'艺术学部 / 荔声合唱团',
    intro:'由荔声合唱团、管乐团、交响乐团联袂献演，以中外经典曲目与新年祝福，陪你辞旧迎新、共赴新岁。',
    tip:'建议提前 15 分钟入场，演出期间请将手机静音。' },
  { id:9,  title:'"龙 TIME NO SEE"社团嘉年华', cat:'brand', campus:'粤海', date:'2026-03-30', month:3,
    loc:'沧海校区', org:'校团委 / 社团联合会',
    intro:'2024 荔园艺术节重磅活动，以中国传统文化为主题的盛大社团嘉年华，含社团展示、互动游戏、音乐节三大板块，吸引数千名师生校友参与。',
    tip:'可现场领取"集章卡"，集满参与社团抽奖。' },
  { id:10, title:'健康荔园跑 · 步数 PK', cat:'sport', campus:'丽湖', date:'2026-04-15', month:4,
    loc:'丽湖校区操场', org:'学生部 / 洗星社区',
    intro:'"健康荔园运动计划"品牌活动，楼栋间步数大比拼，排名第一的楼栋获"鸡腿奖励"，让运动从"宅"变"燃"。',
    tip:'活动期间通过微信运动自动计步，无需额外打卡。' },
  { id:11, title:'粤海杯羽毛球公开赛', cat:'sport', campus:'粤海', date:'2026-10-22', month:10,
    loc:'粤海校区羽毛球馆', org:'深大羽毛球协会',
    intro:'面向全校师生的羽毛球单项公开赛，设男单、女单、男双、女双、混双五个项目，以球会友、挥拍荔园。',
    tip:'以个人/组合形式报名，赛前一周截止报名。' },
  { id:12, title:'荔枝林劳动养护体验', cat:'labor', campus:'粤海', date:'2026-03-12', month:3,
    loc:'粤海校区荔枝林', org:'学生部 / 荔进社',
    intro:'在专业园林师傅指导下参与古荔枝树的修剪、施肥、松土等春季养护劳动，在汗水中读懂"荔园"二字的分量。',
    tip:'请着便于劳动的运动装与防滑鞋，工具由主办方统一提供。' },
  { id:13, title:'荔园青春嘉年华 · 防艾游园', cat:'brand', campus:'粤海', date:'2026-11-29', month:11,
    loc:'校友广场大草坪', org:'学生部 / 传播学院',
    intro:'以科普+娱乐的游园形式，将健康知识带进校园，含防艾游园展、校园义诊、"圈住快乐"等六大板块，近千名参与者驻足体验。',
    tip:'现场参与集章打卡，完成闯关可领取限定纪念品。' },
  { id:14, title:'荔园人文月 · 非遗市集', cat:'academic', campus:'丽湖', date:'2026-04-26', month:4,
    loc:'丽湖校区至畅广场', org:'"墨香荔影"美育工作室',
    intro:'"荔园青年成长营"品牌项目，以非遗市集、脸谱绘制、古琴体验等好玩有趣的活动，让师生在动手创造中感受艺术之美。',
    tip:'市集免费参与，部分非遗手作体验名额有限。' },
  { id:15, title:'"励荔"毕业季系列活动', cat:'brand', campus:'粤海+丽湖', date:'2027-06-10', month:6,
    loc:'两校区', org:'荔进社',
    intro:'荔进社精心策划的毕业季温馨欢送会、定制纪念品等活动，为毕业生留下一份难忘的荔园记忆。',
    tip:'具体场次与报名方式请关注荔进社公众号。' },
];

/* ===== 社团数据（真实深大社团） ===== */
const CLUBS = [
  { name:'深大戏剧社', cat:'art',     ico:'🎭', color:'dc-4', desc:'深大历史最悠久的戏剧社团之一，常年排演原创与经典剧目，承办荔园戏剧节核心演出。', tag:'文艺' },
  { name:'荔声合唱团', cat:'art',     ico:'🎶', color:'dc-2', desc:'深圳大学艺术团旗下合唱团，参演新年音乐会等校级重大文艺演出。', tag:'文艺' },
  { name:'混合胶囊原创音乐社', cat:'art', ico:'🎸', color:'dc-6', desc:'聚集校园原创音乐人，举办原创音乐分享会与主题 Live，是深大原创音乐的孵化地。', tag:'文艺' },
  { name:'DEGREE 舞团', cat:'art',     ico:'🩰', color:'dc-5', desc:'深大代表性舞蹈团体，以高水准编舞与迎新、毕业季演出活跃于荔园舞台。', tag:'文艺' },
  { name:'深大摄影协会', cat:'art',     ico:'📷', color:'dc-1', desc:'用镜头记录荔园四季，组织外拍、摄影工作坊与年度摄影展。', tag:'文艺' },
  { name:'深大跑团',   cat:'sport',   ico:'🏃', color:'dc-3', desc:'以"健康荔园"为信念的跑步社群，组织例跑、接力赛与马拉松约跑。', tag:'体育' },
  { name:'深大羽毛球协会', cat:'sport', ico:'🏸', color:'dc-3', desc:'承办"粤海杯"等校级羽毛球赛事，常年组织会员训练与校际交流。', tag:'体育' },
  { name:'极限飞盘协会', cat:'sport',  ico:'🥏', color:'dc-3', desc:'新兴潮流运动社团，以飞盘体验营、友谊赛让更多同学爱上这项阳光运动。', tag:'体育' },
  { name:'深大击剑协会', cat:'sport',  ico:'🤺', color:'dc-3', desc:'小众而优雅的竞技社团，提供击剑基础教学与校内交流赛。', tag:'体育' },
  { name:'荔园日语协会', cat:'academic',ico:'🇯🇵', color:'dc-6', desc:'千禧年成立的语言文化社团，设日语角、文化体验与留学生交流，粤海丽湖双分部。', tag:'学术' },
  { name:'深圳大学天文爱好者协会', cat:'academic', ico:'🔭', color:'dc-1', desc:'仰望星空的科学社群，组织校内观星夜、天文科普讲座与外出星空露营。', tag:'学术' },
  { name:'荔进社',     cat:'service', ico:'💛', color:'dc-2', desc:'学生部学生资助中心指导的校级组织，"立足荔园，传递关爱"，承办荔园卓越之星评选等。', tag:'公益' },
  { name:'深圳大学志愿者联合会', cat:'service', ico:'🤝', color:'dc-4', desc:'统筹全校志愿服务的校级组织，链接义工岗、大型赛会志愿与公益实践。', tag:'公益' },
  { name:'深大创新创业服务中心', cat:'academic', ico:'💡', color:'dc-6', desc:'服务深大创业者，提供创业孵化、赛事对接与创业沙龙等支持。', tag:'学术' },
  { name:'子归汉服社', cat:'hobby',   ico:'🪷', color:'dc-5', desc:'以汉服为媒传播传统文化，组织汉服出行、传统礼仪体验与节气雅集。', tag:'兴趣' },
  { name:'银河村科幻协会', cat:'hobby',ico:'🚀', color:'dc-1', desc:'聚集科幻迷的阅读与创作社群，举办科幻读书会、影视放映与创作征集。', tag:'兴趣' },
  { name:'深大观鸟学会', cat:'hobby',  ico:'🐦', color:'dc-3', desc:'带你认识荔园与深圳湾的飞鸟，组织校园观鸟导览与鸟类观察记录。', tag:'兴趣' },
  { name:'ALFA 动漫协会', cat:'hobby', ico:'🌸', color:'dc-5', desc:'深大动漫文化社群，组织放映会、Cosplay 与交流活动，连接二次元同好。', tag:'兴趣' },
];

const CAT_LABEL = { brand:'品牌', academic:'学术', art:'文艺', sport:'体育', labor:'劳动' };
const CLUBCAT_LABEL = { art:'文艺', sport:'体育', academic:'学术', service:'公益', hobby:'兴趣' };
const WEL_LABEL = { movie:'观影', concert:'演出', ticket:'门票', life:'生活' };

/* ===== 福利专区数据（参考"第一现场"客户端派发福利模式） ===== */
const WELFARE = [
  { id:1, title:'《深圳青年》校园专场观影', tag:'观影福利', cat:'movie', partner:'第一现场客户端',
    date:'2026-09-19', deadline:'09-15 截止', campus:'粤海', remain:120,
    loc:'万象影城(深圳湾万象城店)', org:'第一现场客户端 / 校团委',
    intro:'"第一现场"客户端联合深大校团委送出《深圳青年》校园专场观影福利 120 张。该片以深圳本土青年创业故事为原型，映后设有导演与深大学子面对面交流环节。',
    tip:'凭校园卡 + 客户端中奖码于场次前 30 分钟至影院兑换；每人限领 2 张。' },
  { id:2, title:'2026 深圳草莓音乐节校园门票', tag:'演唱会福利', cat:'concert', partner:'第一现场客户端',
    date:'2026-10-04', deadline:'09-28 截止', campus:'粤海+丽湖', remain:80,
    loc:'深圳欢乐港湾演艺中心', org:'第一现场客户端 / 学生会',
    intro:'"第一现场"客户端派发 2026 深圳草莓音乐节学生专属门票 80 张，覆盖草莓舞台全日程，用一场音乐节为荔园的秋天加满音量。',
    tip:'中奖名单将于截止后在客户端公示，凭学生证 + 中奖码现场兑票，门票不可转赠。' },
  { id:3, title:'深圳大剧院·市民音乐会公益票', tag:'演出门票', cat:'ticket', partner:'深圳市文化广电旅游体育局',
    date:'2026-11-12', deadline:'11-05 截止', campus:'粤海', remain:60,
    loc:'深圳大剧院音乐厅', org:'深圳市文化广电旅游体育局 / 荔声合唱团',
    intro:'"深圳文化惠民"公益演出项目面向深大师生派发市民音乐会公益门票 60 张，含交响、民乐、声乐等场次，让高雅艺术走进荔园。',
    tip:'公益票为随机场次分配，兑票后请按时入场；具体场次以派发通知为准。' },
  { id:4, title:'"第一现场"国庆档电影通兑券', tag:'观影福利', cat:'movie', partner:'第一现场客户端',
    date:'2026-10-01', deadline:'09-30 截止', campus:'粤海+丽湖', remain:200,
    loc:'全市指定影院通用', org:'第一现场客户端',
    intro:'国庆档院线新片通兑券 200 份，可在全市指定合作影院通兑任意一场 2D/3D 正价影片，陪你用一场电影开启假期。',
    tip:'通兑券为电子码，通过客户端"我的福利"发放，需在有效期内使用。' },
  { id:5, title:'2026 深圳马拉松深大专属名额', tag:'赛事福利', cat:'life', partner:'深圳马拉松组委会',
    date:'2026-12-13', deadline:'10-20 截止', campus:'粤海+丽湖', remain:50,
    loc:'深圳市民中心（起跑）', org:'深圳马拉松组委会 / 深大跑团',
    intro:'深圳马拉松组委会向深大师生开放校园专属报名名额 50 个（含全马/半马），穿一次深大红，跑一次深马，用脚步丈量这座城市。',
    tip:'名额为中签资格，需按组委会流程完成报名缴费；具体项目以报名页可选为准。' },
  { id:6, title:'"荔园美好生活"文创盲盒派发', tag:'生活福利', cat:'life', partner:'校团委 / 荔进社',
    date:'2026-03-15', deadline:'03-12 截止', campus:'丽湖', remain:300,
    loc:'丽湖校区至畅广场', org:'校团委 / 荔进社',
    intro:'开学季"荔园美好生活"文创盲盒大派发 300 份，内含深大限定徽章、帆布袋、荔枝胸针等随机款，把一份荔园惊喜带回家。',
    tip:'现场凭校园卡排队领取，每人一份，发完即止；部分隐藏款需参与互动解锁。' },
  { id:7, title:'2027 深大毕业季演唱会门票', tag:'演唱会福利', cat:'concert', partner:'第一现场客户端',
    date:'2027-06-18', deadline:'06-10 截止', campus:'粤海', remain:100,
    loc:'粤海校区体育场', org:'第一现场客户端 / 校学生会',
    intro:'"第一现场"客户端为深大毕业生送出毕业季露天演唱会门票 100 张，以一场专属荔园的夏夜live，为你的深大时光画上句点。',
    tip:'门票面向 2027 届毕业生优先，凭毕业证/学生证 + 中奖码兑票，具体以派发公告为准。' },
  { id:8, title:'深圳读书月·名家讲座专场票', tag:'文化福利', cat:'ticket', partner:'深圳读书月组委会',
    date:'2026-11-05', deadline:'11-01 截止', campus:'粤海', remain:90,
    loc:'深圳图书馆南书房', org:'深圳读书月组委会 / 图书馆',
    intro:'深圳读书月名家讲座专场门票 90 张，邀请知名作家、学者做客深大，与师生共赴一场思想之约。',
    tip:'讲座免费，凭校园卡 + 预约码入场，座位有限先到先得。' },
];

const state = { tab:'calendar', month:new Date().getMonth()+1, cat:'all', clubCat:'all', welCat:'all', joined:new Set(), followed:new Set(), claimed:new Set() };

/* ===== 工具 ===== */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
function showToast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.remove('hidden'); setTimeout(()=>t.classList.add('hidden'),1700); }
function monthName(m){ return ['','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'][m]; }

/* ===== 渲染：月历活动 ===== */
function renderEvents(){
  const list = $('#eventList');
  let ev = EVENTS.filter(e=>e.month===state.month);
  if(state.cat!=='all') ev = ev.filter(e=>e.cat===state.cat);
  $('#monthLabel').textContent = monthName(state.month);
  $('#eventCount').textContent = ev.length ? `${ev.length} 项活动` : '本月暂无';
  if(!ev.length){ list.innerHTML = `<div style="text-align:center;color:var(--muted);padding:40px 20px;font-size:13px;">这个月暂时没有文化活动<br>换个分类或月份看看</div>`; return; }
  list.innerHTML = ev.map(e=>`
    <div class="event-card" data-id="${e.id}">
      <span class="cat-tag cat-${e.cat}">${CAT_LABEL[e.cat]}</span>
      <div class="event-title">${e.title}</div>
      <div class="event-meta">
        <span>📅 ${e.date.slice(5)}</span>
        <span>📍 ${e.loc}</span>
      </div>
      <div class="event-foot">
        <span class="event-campus">${e.campus} · ${e.org}</span>
        <button class="event-join ${state.joined.has(e.id)?'joined':''}" data-join="${e.id}">${state.joined.has(e.id)?'已报名':'报名'}</button>
      </div>
    </div>`).join('');
  $$('[data-join]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); toggleJoin(+b.dataset.join); }));
  $$('.event-card').forEach(c=>c.addEventListener('click',()=>openSheet(+c.dataset.id)));
}

function toggleJoin(id){
  if(state.joined.has(id)){ state.joined.delete(id); showToast('已取消报名'); }
  else { state.joined.add(id); showToast('报名成功 · 已加入我的'); }
  renderEvents(); renderMine();
}

/* ===== 渲染：发现 ===== */
function renderDiscover(){
  const items = [
    { t:'去荔枝林', n:'摘一颗深大的荔枝', c:'dc-2', e:'🍒' },
    { t:'看一场戏剧', n:'在黑匣子为一出戏鼓掌', c:'dc-4', e:'🎭' },
    { t:'跑一次荔园', n:'用脚步丈量粤海与丽湖', c:'dc-3', e:'🏃' },
    { t:'逛元宵市集', n:'在校友广场遇见非遗', c:'dc-1', e:'🏮' },
    { t:'听新年音乐会', n:'让交响陪你辞旧迎新', c:'dc-5', e:'🎻' },
    { t:'加入一个社团', n:'在百团中找到同好', c:'dc-6', e:'🎉' },
  ];
  $('#discoverGrid').innerHTML = items.map((x,i)=>`
    <div class="discover-card" data-dis="${i}">
      <div class="dc-cover ${x.c}">${x.e}</div>
      <div class="dc-body"><h3>${x.t}</h3><p>${x.n}</p></div>
    </div>`).join('');
  $$('.discover-card').forEach(c=>c.addEventListener('click',()=>{
    const i=+c.dataset.dis; if(i===5){ switchTab('clubs'); return; }
    showToast('荔园必做 · '+items[i].t);
  }));
}

/* ===== 渲染：社团 ===== */
function renderClubs(){
  let cs = CLUBS.slice();
  if(state.clubCat!=='all') cs = cs.filter(c=>c.cat===state.clubCat);
  $('#clubList').innerHTML = cs.map((c,i)=>`
    <div class="club-card">
      <div class="club-avatar ${c.color}">${c.ico}</div>
      <div class="club-info">
        <div class="club-name">${c.name}<span class="club-tag">${c.tag}</span></div>
        <div class="club-desc">${c.desc}</div>
      </div>
      <button class="club-follow ${state.followed.has(i)?'followed':''}" data-follow="${i}">${state.followed.has(i)?'已关注':'关注'}</button>
    </div>`).join('');
  $$('[data-follow]').forEach(b=>b.addEventListener('click',()=>{
    const i=+b.dataset.follow;
    if(state.followed.has(i)){ state.followed.delete(i); showToast('已取消关注'); }
    else { state.followed.add(i); showToast('关注成功 · '+CLUBS[i].name); }
    renderClubs();
  }));
}

/* ===== 渲染：我的 ===== */
function renderMine(){
  const wrap = $('#mineList'), empty=$('#mineEmpty');
  const ids = [...state.joined];
  if(!ids.length){ empty.style.display='flex'; wrap.innerHTML=''; return; }
  empty.style.display='none';
  wrap.innerHTML = ids.map(id=>{
    const e = EVENTS.find(x=>x.id===id);
    return `<div class="event-card" data-id="${e.id}">
      <span class="cat-tag cat-${e.cat}">${CAT_LABEL[e.cat]}</span>
      <div class="event-title">${e.title}</div>
      <div class="event-meta"><span>📅 ${e.date.slice(5)}</span><span>📍 ${e.loc}</span></div>
      <div class="event-foot"><span class="event-campus">${e.campus}</span>
        <button class="event-join joined" data-join="${e.id}">取消报名</button></div>
    </div>`;
  }).join('');
  $$('#mineList [data-join]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); toggleJoin(+b.dataset.join); }));
  $$('#mineList .event-card').forEach(c=>c.addEventListener('click',()=>openSheet(+c.dataset.id)));
  // 我的福利
  const wwrap = $('#mineWelList'), wids = [...state.claimed];
  $('#welCount').textContent = wids.length ? `${wids.length} 份已领取` : '';
  if(!wids.length){ wwrap.innerHTML = `<div style="text-align:center;color:var(--muted);padding:24px 20px;font-size:12px;">还没有领取福利<br>去福利专区碰碰运气</div>`; return; }
  wwrap.innerHTML = wids.map(id=>{
    const w = WELFARE.find(x=>x.id===id);
    return `<div class="event-card" data-wid="${w.id}">
      <span class="cat-tag cat-${w.cat==='movie'?'academic':w.cat==='concert'?'art':w.cat==='ticket'?'brand':'sport'}">${w.tag}</span>
      <div class="event-title">${w.title}</div>
      <div class="event-meta"><span>📅 ${w.date.slice(5)}</span><span>🏷️ ${w.partner}</span></div>
      <div class="event-foot"><span class="event-campus">${w.loc}</span>
        <button class="event-join joined" data-claim="${w.id}">取消领取</button></div>
    </div>`;
  }).join('');
  $$('#mineWelList [data-claim]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); toggleClaim(+b.dataset.claim); }));
  $$('#mineWelList .event-card').forEach(c=>c.addEventListener('click',()=>openWelSheet(+c.dataset.wid)));
}

/* ===== 渲染：福利专区 ===== */
function renderWelfare(){
  let ws = WELFARE.slice();
  if(state.welCat!=='all') ws = ws.filter(w=>w.cat===state.welCat);
  const grid = $('#welList');
  const head = $('#welCountHead'); if(head) head.textContent = ws.length ? `${ws.length} 项可领` : '';
  if(!ws.length){ grid.innerHTML = `<div style="text-align:center;color:var(--muted);padding:40px 20px;font-size:13px;">这个分类暂时没有福利<br>换个分类看看</div>`; return; }
  grid.innerHTML = ws.map(w=>{
    const claimed = state.claimed.has(w.id);
    return `<div class="wel-card ${claimed?'claimed':''}" data-wid="${w.id}">
      <div class="wel-cover wel-c-${w.cat}">${WEL_LABEL[w.cat]||'福利'}</div>
      <div class="wel-body">
        <span class="wel-tag wel-t-${w.cat}">${w.tag}</span>
        <div class="wel-title">${w.title}</div>
        <div class="wel-meta"><span>📅 ${w.date.slice(5)}</span><span>🏷️ ${w.partner}</span></div>
        <div class="wel-partner">由 <b>${w.partner}</b> 联合派发 · ${w.campus}</div>
        <div class="wel-foot">
          <span class="wel-remain">${claimed?'已领取':`剩 ${w.remain} 份 · 截止 ${w.deadline}`}</span>
          <button class="wel-claim ${claimed?'claimed':''}" data-claim="${w.id}">${claimed?'已领取':'立即领取'}</button>
        </div>
      </div>
    </div>`;
  }).join('');
  $$('[data-claim]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); toggleClaim(+b.dataset.claim); }));
  $$('.wel-card').forEach(c=>c.addEventListener('click',()=>openWelSheet(+c.dataset.wid)));
}

function toggleClaim(id){
  if(state.claimed.has(id)){ state.claimed.delete(id); showToast('已取消领取'); }
  else { state.claimed.add(id); showToast('领取成功 · 已加入我的福利'); }
  renderWelfare(); renderMine();
}

/* ===== 福利详情弹层 ===== */
function openWelSheet(id){
  const w = WELFARE.find(x=>x.id===id);
  const coverClass = ({movie:'wel-c-movie',concert:'wel-c-concert',ticket:'wel-c-ticket',life:'wel-c-life'})[w.cat]||'wel-c-life';
  const claimed = state.claimed.has(id);
  $('#sheetBody').innerHTML = `
    <div class="sheet-cover ${coverClass}">${w.tag}</div>
    <span class="sheet-cat cat-${w.cat==='movie'?'academic':w.cat==='concert'?'art':w.cat==='ticket'?'brand':'sport'}">${w.tag}</span>
    <h2>${w.title}</h2>
    <div class="sheet-meta">
      <span>📅 ${w.date}</span>
      <span>📍 ${w.loc}</span>
      <span>🏷️ ${w.partner}</span>
      <span>🏛️ ${w.org}</span>
    </div>
    <p class="desc">${w.intro}</p>
    <div class="tip">💡 ${w.tip}</div>
    <div class="sheet-actions">
      <button class="sheet-btn ghost" id="sheetClose">关闭</button>
      <button class="sheet-btn primary" id="sheetJoin">${claimed?'已领取':'立即领取'}</button>
    </div>`;
  $('#sheetMask').classList.remove('hidden');
  $('#sheet').classList.remove('hidden');
  $('#sheetClose').addEventListener('click',closeSheet);
  $('#sheetJoin').addEventListener('click',()=>{ toggleClaim(id); closeSheet(); });
}

/* ===== 详情弹层 ===== */
function openSheet(id){
  const e = EVENTS.find(x=>x.id===id);
  const coverClass = ({brand:'dc-2',academic:'dc-6',art:'dc-4',sport:'dc-3',labor:'dc-1'})[e.cat]||'dc-1';
  $('#sheetBody').innerHTML = `
    <div class="sheet-cover ${coverClass}">${CAT_LABEL[e.cat]}</div>
    <span class="sheet-cat cat-${e.cat}">${CAT_LABEL[e.cat]}</span>
    <h2>${e.title}</h2>
    <div class="sheet-meta">
      <span>📅 ${e.date}</span>
      <span>📍 ${e.loc}</span>
      <span>🏫 ${e.campus}</span>
      <span>🏛️ ${e.org}</span>
    </div>
    <p class="desc">${e.intro}</p>
    <div class="tip">💡 ${e.tip}</div>
    <div class="sheet-actions">
      <button class="sheet-btn ghost" id="sheetClose">关闭</button>
      <button class="sheet-btn primary" id="sheetJoin">${state.joined.has(id)?'已报名':'一键报名'}</button>
    </div>`;
  $('#sheetMask').classList.remove('hidden');
  $('#sheet').classList.remove('hidden');
  $('#sheetClose').addEventListener('click',closeSheet);
  $('#sheetJoin').addEventListener('click',()=>{ toggleJoin(id); closeSheet(); });
}
function closeSheet(){ $('#sheetMask').classList.add('hidden'); $('#sheet').classList.add('hidden'); }

/* ===== 切换标签/页面 ===== */
function switchTab(tab){
  state.tab = tab;
  $$('.page').forEach(p=>p.classList.add('hidden'));
  $('#page-'+tab).classList.remove('hidden');
  $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===tab));
  $$('.bb-item').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  if(tab==='calendar') renderEvents();
  if(tab==='clubs') renderClubs();
  if(tab==='welfare') renderWelfare();
  if(tab==='mine') renderMine();
}

/* ===== 初始化 ===== */
function init(){
  renderDiscover();
  renderEvents();
  renderWelfare();
  renderMine();
  // 顶部 tab + 底部栏
  $$('.tab-nav .tab').forEach(t=>t.addEventListener('click',()=>switchTab(t.dataset.tab)));
  $$('.bottombar .bb-item').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
  // 分类 chip
  $$('#chipGroup .chip').forEach(c=>c.addEventListener('click',()=>{
    $$('#chipGroup .chip').forEach(x=>x.classList.remove('active'));
    c.classList.add('active'); state.cat=c.dataset.cat; renderEvents();
  }));
  // 社团分类
  $$('.club-cat').forEach(c=>c.addEventListener('click',()=>{
    $$('.club-cat').forEach(x=>x.classList.remove('active'));
    c.classList.add('active'); state.clubCat=c.dataset.cat; renderClubs();
  }));
  // 福利分类
  $$('.wel-cat').forEach(c=>c.addEventListener('click',()=>{
    $$('.wel-cat').forEach(x=>x.classList.remove('active'));
    c.classList.add('active'); state.welCat=c.dataset.cat; renderWelfare();
  }));
  // 月份
  $('#prevMonth').addEventListener('click',()=>{ state.month = state.month===1?12:state.month-1; renderEvents(); });
  $('#nextMonth').addEventListener('click',()=>{ state.month = state.month===12?1:state.month+1; renderEvents(); });
  // 弹层关闭
  $('#sheetMask').addEventListener('click',closeSheet);
  // 搜索按钮
  $('#searchBtn').addEventListener('click',()=>showToast('搜索功能 · 敬请期待'));
}
document.addEventListener('DOMContentLoaded', init);
window.state=state;window.switchTab=switchTab;
