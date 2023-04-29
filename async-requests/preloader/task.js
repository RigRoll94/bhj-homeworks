let xhr = new XMLHttpRequest();
let loader = document.getElementById("loader");

function insertHTML(object) {
    for (let key in object) {
        let html =
            `<div class="item">
                <div class="item__code">${object[key].CharCode}</div>
                <div class="item__value">${object[key].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`
        document.getElementById('items').insertAdjacentHTML('afterbegin', html);
    }; 
}

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let object = JSON.parse(this.responseText)["response"].Valute;
        insertHTML(object);
        loader.classList.remove('loader_active');
    }
}