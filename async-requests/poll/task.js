let pollAnswers = document.getElementById("poll__answers");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

function poll(object) {
    document.getElementById("poll__title").innerHTML = object.title;
    object.answers.forEach(item => {
        pollAnswers.insertAdjacentHTML("beforeend", `<button class="poll__answer">${item}</button>`)
    });
} 

xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let object = JSON.parse(this.responseText).data;
        console.log(object)
        poll(object);
    }
}

pollAnswers.onclick = () => {
    alert ("Спасибо, ваш голос засчитан!");
    window.location.reload();
};