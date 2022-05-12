console.log("Hello World");

// Déclarer une variable
var nombre = 2;     // Variable gloabale
let nombre2 = 5;    // Variable locale

// Faiblement typée (boolean, number, string)
console.log(nombre2);
nombre2 = "toto";
console.log(nombre2);

let resultat = nombre + 3;
console.log(resultat);

let prenom = "Adrien";
console.log("Bonjour " + prenom);

console.log( 1 > 3 );

let chiffre = 1;
let chiffreString = "1";

// Cast + affichage du tympe
let chiffreCast = Number(chiffreString);
console.log(typeof chiffreCast);

console.log(chiffre == chiffreString);

// Egalité stricte -> === et !==
console.log(chiffre === chiffreString);

console.log(true || false);

console.log("Exo sur les booléens");
console.log("exo 1 : " + (true && false));  // FALSE
console.log("exo 2 : " + (true || false));  // TRUE
console.log("exo 3 : " + (false || false)); // FALSE
console.log("exo 4 : " + (true || true));   // TRUE
console.log("exo 5 : " + (true && true));   // TRUE

let drapeau = "vert";
let mer = "calme";
let surveille = false;

if(drapeau != "rouge") {
    console.log("J'ai le droit d'aller me baigner");  
}
if(drapeau != "rouge" && surveille) {
    console.log("La baignade est autorisée et surveillée");
}
if(surveille || (mer == "calme" && drapeau == "vert")) {
    console.log("La baignade est autorisée si elle est surveillée. Sans surveillance, elle est aurotisée en cas de mer calme et drapeau vert");
}

let monTableau = ["Printemps", "Eté", "Automne", "Hiver"];

for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

monTableau.push("toto");

for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

// Déclarer des fonctions
function direBonjour() {
    console.log("Bonjour " + prenom + ", comment ça va ?");
}

direBonjour("Adrien");