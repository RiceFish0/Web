let queue = 120;

function updateStatus() {
    queue -= Math.floor(Math.random() * 5);

    if (queue < 0) queue = 0;

    document.getElementById("queue").innerText = queue;
    document.getElementById("time").innerText = Math.ceil(queue / 60);

    if (queue === 0) {
        alert("? 系統恢復！即將進入報名頁");
    }
}

// 每5秒更新一次（模擬排隊）
setInterval(updateStatus, 5000);

// 手動重試
function retry() {
    location.reload();
}