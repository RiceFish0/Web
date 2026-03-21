let queue = 132;
let isMagicActive = false;

// 自動更新排隊人數
function updateQueue() {
    if (queue <= 0) return;

    queue -= Math.floor(Math.random() * 6);
    if (queue < 0) queue = 0;

    document.getElementById("queue").innerText = queue;
    document.getElementById("time").innerText = Math.ceil(queue / 60);

    if (queue === 0) {
        const notif = document.getElementById('notification');
        notif.classList.add('active');
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
    const film = document.getElementById('film');

    if (!isMagicActive) {
        // 播放音樂並啟動動畫
        audio.play().catch(e => console.log("音樂播放受限"));
        pochacco.classList.add('dancing');
        film.classList.add('show');
        isMagicActive = true;
        
        // 彩蛋：讓排隊人數減少快一點
        queue = Math.max(0, queue - 20);
        updateQueue();
    } else {
        // 停止音樂與動畫
        audio.pause();
        pochacco.classList.remove('dancing');
        film.classList.remove('show');
        isMagicActive = false;
    }
}