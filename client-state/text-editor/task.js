let editor = document.getElementById("editor");
let button = document.getElementById("button");

window.addEventListener("load", function() {
    editor.value = localStorage.getItem("text");
    editor.addEventListener("input", function() {
        localStorage.setItem("text", editor.value);
    });
});

button.addEventListener("click", function() {
    localStorage.removeItem("text")
    editor.value = "";
});