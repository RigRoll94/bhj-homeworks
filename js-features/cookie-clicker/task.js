let image = document.getElementById("cookie");
let click = document.getElementById("clicker__counter").innerHTML;

function changeSizeSmall() {
    image.width = 150;
    click++;
    document.getElementById("clicker__counter").innerHTML = click;
}

function changeSizeBig() {
    image.width = 200;
    click++;
    document.getElementById("clicker__counter").innerHTML = click;
}

function changeSize() {
    if (image.width > 150) {
        return changeSizeSmall();
    }
    return changeSizeBig();
}

image.onclick = changeSize;