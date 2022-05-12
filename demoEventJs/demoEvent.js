let compteur = 0;

function compteurIncrement() {
    compteur++;
    let p = document.getElementById("paragrapheCompteur");
    p.innerHTML = "Vous avez cliqué " + compteur + " fois";
}

// setInterval(changeColor, 100);

function changeColor(buttonRed) {
    let randomRed = getRandomInt(256);
    let randomGreen = getRandomInt(256);
    let randomBlue = getRandomInt(256);
    buttonRed.style.backgroundColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
}
function getRandomInt(borneMax) {
    return Math.floor(Math.random() * borneMax);
}
