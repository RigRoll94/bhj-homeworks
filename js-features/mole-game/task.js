const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;

getHole = index => document.getElementById(`hole${index}`);

for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
        if (counterDead === 10) {
            counterDead = 0;
            counterLost = 0;
            alert ('Вы победили!');
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }
        if (counterLost === 5) {
            counterDead = 0;
            counterLost = 0;
            alert ('Вы проиграли :(');
            lost.textContent = counterLost;
            lost.textContent = counterLost;
        }
    });
}