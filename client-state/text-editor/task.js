let editor = document.getElementById("editor");
let button = document.getElementById("button");

window.addEventListener("load", function() {
    if (localStorage.text) {
        editor.value = localStorage.getItem("text");
    } else {
        editor.addEventListener("input", function() {
            localStorage.setItem("text", editor.value);
        });
    };
});

button.addEventListener("click", function() {
    localStorage.clear()
    editor.value = "";
});