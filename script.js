function openApp(appName) {
    const apps = document.querySelectorAll('.app');
    apps.forEach(app => app.style.display = 'none');
    document.getElementById('apps').style.display = 'block';
    document.getElementById(appName).style.display = 'block';
}

document.getElementById('weather-widget').addEventListener('click', function() {
    openApp('weather');
});

document.getElementById('clock-widget').addEventListener('click', function() {
    openApp('clock');
});

function calcInput(value) {
    document.getElementById('calc-display').value += value;
}

function calcClear() {
    document.getElementById('calc-display').value = '';
}

function calcCalculate() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'エラー';
    }
}

let currentImageIndex = 1;
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex > 3) currentImageIndex = 1;
    document.getElementById('gallery-img').src = `gallery-image${currentImageIndex}.jpg`;
}

function changeBackground() {
    document.body.style.backgroundImage = "url('new-background.jpg')";
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock-display').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
