let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = function(event) {        
        progress.value = (event.loaded / event.total);
    }
    xhr.upload.onload = function() {
        alert("Файл успешно загружен");
    }
    xhr.send(formData);
})