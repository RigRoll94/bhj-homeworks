let form = document.getElementById("signin__form");
let welcome = document.getElementById("welcome");
let signin = document.getElementById("signin");
let signoutBtn = document.getElementById("signout__btn")
let userId = document.getElementById("user_id");

function login(user) {
    signin.classList.toggle('signin_active');
    welcome.classList.toggle('welcome_active');
    userId.innerHTML = user;
};

function logout() {
    signin.className = "signin signin_active";
    welcome.className = "welcome";
    localStorage.removeItem("user_id")
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.responseType = 'json';
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
    
    xhr.addEventListener("load", function() {
        if (xhr.response.success) {
            let id = xhr.response.user_id;
            localStorage.setItem("user_id", id);
            login(id);
        } else { alert ("Неверный логин/пароль")};
    });
});

window.addEventListener("DOMContentLoaded", function() {
    let localId = localStorage.getItem("user_id");
    if (localId) {
        login(localId);
    };
});

signoutBtn.addEventListener("click", logout);