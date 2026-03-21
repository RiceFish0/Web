let queue = 132;

function updateQueue() {
    queue -= Math.floor(Math.random() * 6);

    if (queue < 0) queue = 0;

    document.getElementById("queue").innerText = queue;
    document.getElementById("time").innerText = Math.ceil(queue / 60);

    if (queue === 0) {
        alert("🎉 系統恢復！即將進入報名頁");
    }
}

setInterval(updateQueue, 5000);

function retry() {
    location.reload();
}

function startTheShow() {
    const song = document.getElementById("jay-song");
    const pochacco = document.getElementById("dance-pochacco");
    const film = document.getElementById("film-reel");

    // 播放音樂
    song.play().catch(e => {
        console.log("瀏覽器阻擋自動播放，請確保已有互動。");
    });

    // 觸發跳舞動畫
    pochacco.classList.add("dancing");

    // 讓膠捲滑入
    film.classList.add("film-show");

    // 可以在這裡加一個彩蛋：排隊時間直接減半
    queue = Math.floor(queue / 2);
    updateQueue();
}