let queue = 132;
let isMagicActive = false;

// 自動更新排隊人數
function updateQueue() {
    if (queue <= 0) return;
    let total = 132; 
    let progressPercent = ((total - queue) / total) * 100;
    document.querySelector(".progress").style.width = progressPercent + "%";
    queue -= Math.floor(Math.random() * 6);
    if (queue < 0) queue = 0;

    document.getElementById("queue").innerText = queue;
    document.getElementById("time").innerText = Math.ceil(queue / 60);

    if (queue === 0) {
    const notif = document.getElementById('notification');
    notif.classList.add('active');

    // 🔥 3秒後跳轉
    setTimeout(() => {
        window.location.href = "https://cpe.mcu.edu.tw/cpe/";
    }, 3000);
}
}

// 每 5 秒執行一次
setInterval(updateQueue, 5000);

// 重新整理頁面
function retry() {
    location.reload();
}

// 核心互動功能：怕洽狗與膠捲
function toggleMagic() {
    const audio = document.getElementById('bgm');
    const pochacco = document.getElementById('pochacco');
    const recordContainer = document.getElementById('record-player'); // 修改這行
    const recordDisk = document.querySelector('.record'); // 唱片本體

    if (!isMagicActive) {
        // 播放音樂
        audio.play().catch(e => console.log("播放受限"));
        
        // 啟動動畫
        pochacco.classList.add('dancing');
        recordContainer.classList.add('show');
        recordDisk.classList.add('spinning'); // 讓唱片轉動
        
        isMagicActive = true;
        
    } else {
        // 停止音樂與動畫
        audio.pause();
        pochacco.classList.remove('dancing');
        recordContainer.classList.remove('show');
        recordDisk.classList.remove('spinning');
        
        isMagicActive = false;
    }
}