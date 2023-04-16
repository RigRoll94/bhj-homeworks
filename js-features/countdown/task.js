let elementTimer = document.getElementById("timer").innerHTML;

const timer = setInterval(function() {
    if (elementTimer === 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!")
        return;
    }
    elementTimer--;
    document.getElementById("timer").innerHTML = elementTimer;
}, 1000)