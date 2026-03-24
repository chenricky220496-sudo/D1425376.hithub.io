// 【占卜結果資料庫】
// 集中管理所有的結果，方便未來自行修改主題或內容。
const fortuneData = [
    {
        type: "✨ 滿天星大吉 ✨",
        description: "宇宙的能量正全方位地支持著你，今天是充滿奇蹟的一天！",
        aspects: {
            work: "靈感如泉湧，遇到的困難都能迎刃而解，表現亮眼。",
            study: "思維清晰敏捷，學習效率翻倍，適合挑戰困難科目。",
            love: "自身散發迷人魅力，單身者有浪漫邂逅，有伴者甜蜜升溫。",
            money: "財神爺眷顧，可能會有意想不到的獎金或小橫財。"
        },
        closing: "大膽展現自己吧，整個宇宙都是你的舞台！"
    },
    {
        type: "☀️ 如日中天 ☀️",
        description: "你的運勢像正午的太陽一樣熾熱強烈，非常適合主動出擊。",
        aspects: {
            work: "領導力大發揮，適合主導專案或提出創新建議，會被採納。",
            study: "積極的態度帶來顯著進步，老師與同學都對你刮目相看。",
            love: "主動表達心意會有好結果，不要猶豫，勇敢一點！",
            money: "正財運極佳，努力工作能獲得相應的豐厚回報。"
        },
        closing: "燃燒你的熱情，大步去追求你真正渴望的事物！"
    },
    {
        type: "🌙 月影微光 🌙",
        description: "運勢平穩中帶著些許神秘，適合內省與低調行事。",
        aspects: {
            work: "適合處理細節與後勤工作，默默耕耘會被長官看在眼裡。",
            study: "適合獨自靜心閱讀，整理過去的筆記會有全新的體悟。",
            love: "感情發展細水長流，多傾聽對方的心聲能加深彼此連結。",
            money: "理財宜保守，適合儲蓄或進行低風險的長遠規劃。"
        },
        closing: "在安靜中尋找力量，有時退一步海闊天空。"
    },
    {
        type: "🌊 乘風破浪 🌊",
        description: "可能會遇到一些挑戰，但這是讓你大幅度成長的最佳契機。",
        aspects: {
            work: "任務繁重但能激發潛能，撐過這波會獲得極大成就感。",
            study: "遇到瓶頸別氣餒，換個學習方法或請教他人會有突破。",
            love: "關係中可能有些小摩擦，耐心溝通是解鎖心結的鑰匙。",
            money: "避免衝動消費，謹慎評估任何看似誘人的投資機會。"
        },
        closing: "沒有暗礁，激不起美麗的浪花。你是最強的航海家！"
    },
    {
        type: "🌸 春暖花開 🌸",
        description: "一切都在往好的方向發展，過去的努力開始結出甜美的果實。",
        aspects: {
            work: "人際關係融洽，貴人運旺盛，遇到困難會有人伸出援手。",
            study: "學習漸入佳境，之前不懂的概念突然豁然開朗。",
            love: "春風拂面，桃花運正在醞釀中，多參加社交活動吧。",
            money: "過去的投資開始獲利，或是收到朋友的貼心小禮物。"
        },
        closing: "保持微笑，好運總是偏愛快樂的人！"
    },
    {
        type: "🍃 隨風飄逸 🍃",
        description: "今天是充滿隨機性的一天，放寬心胸去接受一切安排。",
        aspects: {
            work: "計畫可能趕不上變化，保持彈性與適應力是今天的生存法則。",
            study: "不要死磕同一個難題，出門走走反而會有意想不到的靈感。",
            love: "順其自然最好，不用刻意營造浪漫，平凡也很幸福。",
            money: "可能會有小額的額外開銷，但不會影響整體財務大局。"
        },
        closing: "放輕鬆，有時候漫無目的也是一種浪漫的旅行。"
    },
    {
        type: "🔥 鳳凰涅槃 🔥",
        description: "現在是結束與開始的交界點，你需要放下過去，迎接新生。",
        aspects: {
            work: "適合結束無效的專案，勇敢提出全新的改革方案。",
            study: "改變舊有的學習習慣，嘗試引入新的筆記工具或排程機制。",
            love: "清理掉不健康的關係或心結，給自己一個重新愛人的機會。",
            money: "重新檢視財務狀況，理清債務或果斷取消不必要的訂閱。"
        },
        closing: "每一次的放下，都是為了未來能更好地拿起。"
    },
    {
        type: "💎 堅如磐石 💎",
        description: "你的毅力與耐力是今天的最大武器，堅持下去就是你的。",
        aspects: {
            work: "適合處理耗時、極需耐心與高度專注的長期任務。",
            study: "基礎打得越穩，未來的成績就越高，別急著追求速度。",
            love: "給予伴侶滿滿的安全感，你們的關係正變得更加穩固。",
            money: "財富是累積出來的，堅持定額儲蓄將看到可觀的成果。"
        },
        closing: "不要輕言放棄，成功的果實需要時間去小心灌溉！"
    },
    {
        type: "🍀 幸運四葉草 🍀",
        description: "小幸運不斷的一天，留意身邊那些微小但美好的日常事物。",
        aspects: {
            work: "剛好避開了麻煩事，或順利趕上最後期限，讓你鬆了一口氣。",
            study: "考題剛好都是你有準備到的方向，直覺選擇也很準確。",
            love: "和喜歡的人剛好搭上同一班車，或是收到意外的關心訊息。",
            money: "買東西剛好遇到折扣，或是走在路上撿到發票中獎的小確幸。"
        },
        closing: "幸運一直都在你身邊，只要你用心去感受。"
    },
    {
        type: "⚡ 閃電交加 ⚡",
        description: "充滿震撼與驚喜的一天，準備好迎接突如其來的改變。",
        aspects: {
            work: "靈光一閃想到絕佳點子，或是突然被指派一個破局的重要任務。",
            study: "突然茅塞頓開，瞬間理解了困擾已久的核心難題。",
            love: "可能有一見鍾情的浪漫遭遇，或是關係有突破性的高速層次進展。",
            money: "偏財運旺盛，或許可以試試手氣買張彩券或參加抽獎活動。"
        },
        closing: "擁抱未知吧！最棒的驚喜往往藏在計畫之外。"
    }
];

// 取得 DOM 元素
const homeSection = document.getElementById('home-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');

const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');

// 結果卡片元素
const resultType = document.getElementById('result-type');
const resultDesc = document.getElementById('result-desc');
const aspectWork = document.getElementById('aspect-work');
const aspectStudy = document.getElementById('aspect-study');
const aspectLove = document.getElementById('aspect-love');
const aspectMoney = document.getElementById('aspect-money');
const resultClosing = document.getElementById('result-closing');

// 註冊點擊事件 listener
drawBtn.addEventListener('click', startDivination);
retryBtn.addEventListener('click', resetDivination);

// 開始占卜流程
function startDivination() {
    // 隱藏首頁，顯示載入中動畫
    homeSection.classList.remove('active');
    loadingSection.classList.add('active');

    // 模擬命運抽籤等待時間 (1.5 ~ 2.5 秒隨機)
    const delay = Math.floor(Math.random() * 1000) + 1500;
    
    setTimeout(() => {
        showResult();
    }, delay);
}

// 呈現占卜結果
function showResult() {
    // 取得隨機占卜結果
    const randomIndex = Math.floor(Math.random() * fortuneData.length);
    const result = fortuneData[randomIndex];

    // 更新 DOM 內容為隨機出的結果
    resultType.textContent = result.type;
    resultDesc.textContent = result.description;
    aspectWork.textContent = result.aspects.work;
    aspectStudy.textContent = result.aspects.study;
    aspectLove.textContent = result.aspects.love;
    aspectMoney.textContent = result.aspects.money;
    resultClosing.textContent = result.closing;

    // 隱藏載入中狀態，顯示最終結果
    loadingSection.classList.remove('active');
    resultSection.classList.add('active');
}

// 重新占卜流程
function resetDivination() {
    // 隱藏結果區塊，重新顯示首頁區塊
    resultSection.classList.remove('active');
    homeSection.classList.add('active');
}

// -----------------------------------------
// Canvas 星空粒子特效背景
// -----------------------------------------
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 100; // 控制畫面中粒子的數量

// 設定 canvas 大小以匹配螢幕
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 星星粒子類別設計
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    // 更新位置
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 碰到邊界時繞出來
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    // 繪製粒子
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

// 初始化粒子群
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// 重繪動畫函數
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    requestAnimationFrame(animateParticles);
}

// 啟動動畫
initParticles();
animateParticles();
