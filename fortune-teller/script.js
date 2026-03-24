// 【占卜結果資料區】
// 您可以在此處集中修改、新增占卜結果
const fortuneData = [
    {
        type: "✨ 超級大吉 ✨",
        description: "運氣突破天際！今天簡直是你的主場，想做什麼就大膽去做吧！",
        work: "貴人相助，難題迎刃而解，表現備受肯定。",
        study: "思路清晰如泉湧，任何測驗或學習都能輕鬆掌握。",
        love: "魅力四射，單身者有浪漫邂逅，有伴者甜蜜升溫。",
        money: "偏財運旺盛，可能會收到意外之財或禮物。",
        closing: "盡情享受這光芒萬丈的一天吧！🌟"
    },
    {
        type: "🌟 大吉 🌟",
        description: "非常順利的一天，充滿正能量與好機會。",
        work: "進展順利，提案容易被採納，與同事合作無間。",
        study: "專注力滿分，今天學習新事物的效率特別高。",
        love: "感情融洽，適合主動出擊或是安排場浪漫約會。",
        money: "投資或理財有不錯的回報，適合做些財務規劃。",
        closing: "把握好運，讓今天成為特別的一天！"
    },
    {
        type: "☀️ 中吉 ☀️",
        description: "平穩向上，累積實力，許多事情都在往好的方向發展。",
        work: "穩紮穩打，只要按部就班就能順利完成任務。",
        study: "溫故知新，把基礎打好會為未來帶來很大幫助。",
        love: "平淡見真情，一個溫暖的問候就能拉近彼此距離。",
        money: "收支平衡，小有盈餘，可以犒賞一下自己。",
        closing: "腳踏實地，幸運就在不遠處等著你！"
    },
    {
        type: "🍀 小吉 🍀",
        description: "日常中的小確幸，細心體會就能發現生活的美好。",
        work: "雖然忙碌但充實，完成小目標能帶來大成就感。",
        study: "有不錯的學習氛圍，適合與同學一起討論研究。",
        love: "順其自然，別給對方太大壓力，輕鬆相處最舒服。",
        money: "適合節流，整理一下發票說不定有中獎的驚喜。",
        closing: "微小的幸運也是一種幸福喔！"
    },
    {
        type: "🌱 末吉 🌱",
        description: "先苦後甘，雖然一開始可能會有些卡卡的，但結果會是好的。",
        work: "遇到挑戰別氣餒，堅持下去會看到轉機。",
        study: "碰到瓶頸時不妨休息一下，換個角度思考就通了。",
        love: "可能會有小摩擦，多點包容與溝通就能化解。",
        money: "守財為主，避免衝動購物。",
        closing: "雨過天晴，彩虹就在前方！🌈"
    },
    {
        type: "⚖️ 平 ⚖️",
        description: "無風無雨的一天，平凡就是最大的福氣。",
        work: "例行公事為主，保持平常心應對即可。",
        study: "按照計畫進行，不需要給自己額外的壓力。",
        love: "穩定的關係，適合在家一起看部電影放鬆。",
        money: "正常開銷，沒有太大的波動。",
        closing: "享受這份平靜與安寧吧！"
    },
    {
        type: "☁️ 轉運中 ☁️",
        description: "即將迎接好運的準備期，稍微沉澱一下自己。",
        work: "適合整理檔案、規劃未來，暫時不宜做重大決定。",
        study: "複習過去出錯的地方，會是今天的收穫。",
        love: "多聽聽別人的想法，站在對方角度思考。",
        money: "花錢前多想三秒鐘，非必要的開銷可以省下。",
        closing: "蓄勢待發，明天會更好！💪"
    },
    {
        type: "🎭 驚喜運 🎭",
        description: "不按牌理出牌的一天，充滿了意想不到的變數！",
        work: "可能會有突發任務，但會是展現應變能力的好機會。",
        study: "換個學習環境（例如去咖啡廳）會有意想不到的效率。",
        love: "給對方一個小驚喜吧！會有意想不到的回報。",
        money: "或許會在舊外套口袋裡發現遺忘的鈔票！",
        closing: "擁抱未知，生活充滿樂趣！"
    },
    {
        type: "💖 桃花運 💖",
        description: "人際關係大爆發！今天你就是人群中的焦點。",
        work: "適合需要溝通、談判或團隊合作的工作，人緣極佳。",
        study: "如有不懂的地方，今天向別人請教一定能得到熱情解答。",
        love: "放電無上限！稍微打扮一下，今天非常容易吸引目光。",
        money: "可能會有人請客，或是得到朋友的幫助而省錢。",
        closing: "多展現笑容，好運跟著來！😊"
    },
    {
        type: "💰 財神眷顧 💰",
        description: "滿滿的金幣氣息！今天的財運好到讓人羨慕。",
        work: "業績成長、爭取預算或加薪的好時機。",
        study: "投資在買書或課程上的錢，會轉化為強大的知識力量。",
        love: "適合準備一份實用的禮物送給心儀的對象。",
        money: "財運極佳！也許能考慮買張彩券試試手氣。",
        closing: "財神爺對你微笑了！🤑"
    }
];

// 取得 DOM 元素
const startSection = document.getElementById('start-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');

const drawBtn = document.getElementById('draw-btn');
const drawBtnText = document.getElementById('draw-btn-text');
const resetBtn = document.getElementById('reset-btn');

// 結果元素
const typeEl = document.getElementById('result-type');
const descEl = document.getElementById('result-desc');
const workEl = document.getElementById('result-work');
const studyEl = document.getElementById('result-study');
const loveEl = document.getElementById('result-love');
const moneyEl = document.getElementById('result-money');
const closingEl = document.getElementById('result-closing');

// 占卜流程控制
function startFortuneTelling() {
    // 隱藏開始區域，顯示載入動畫
    startSection.classList.remove('active');
    startSection.classList.add('hidden');
    
    loadingSection.classList.remove('hidden');
    loadingSection.classList.add('active');
    
    // 模擬載入時間 (1.5秒後顯示結果)
    setTimeout(() => {
        showResult();
    }, 1500);
}

// 顯示結果
function showResult() {
    // 隨機抽取一個結果
    const randomIndex = Math.floor(Math.random() * fortuneData.length);
    const result = fortuneData[randomIndex];
    
    // 填寫結果資料
    typeEl.textContent = result.type;
    descEl.textContent = result.description;
    workEl.textContent = result.work;
    studyEl.textContent = result.study;
    loveEl.textContent = result.love;
    moneyEl.textContent = result.money;
    closingEl.textContent = result.closing;
    
    // 隱藏載入區，顯示結果區
    loadingSection.classList.remove('active');
    loadingSection.classList.add('hidden');
    
    resultSection.classList.remove('hidden');
    resultSection.classList.add('active');
}

// 重置占卜
function resetFortuneTelling() {
    // 隱藏結果區，顯示開始區
    resultSection.classList.remove('active');
    resultSection.classList.add('hidden');
    
    startSection.classList.remove('hidden');
    startSection.classList.add('active');
}

// 綁定事件監聽器
drawBtn.addEventListener('click', startFortuneTelling);
drawBtnText.addEventListener('click', startFortuneTelling);
resetBtn.addEventListener('click', resetFortuneTelling);
