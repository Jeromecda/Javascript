// Exercice 1 :
let tableauNombreAleatoireTire = [];
let compteur = 0;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

do {
    let nombreAlea = getRandomArbitrary(0,100);
    // Si le nombre n'a pas déjà été tiré
    if(!tableauNombreAleatoireTire.includes(nombreAlea)) {
        
        tableauNombreAleatoireTire.push(nombreAlea);
    }
    compteur++;
} while(tableauNombreAleatoireTire.length < 100)

console.log("On a fait " + compteur + " tirages !");
console.log(tableauNombreAleatoireTire);


// Exercice 2 :
let phrase = "Une chaine avec des lettres dans un certain ordre pour donner du sens";
let phraseSansEspaces = phrase.replace(/\s/g, '');
let tableau = Array.from(phraseSansEspaces.toLowerCase());
console.log(tableau.sort());


// Exercice 3 :
phrase = "une phrase sans majuscule";
let mots = phrase.split(/\s/);
let phraseAvecMajuscule = "";

for(let mot of mots) {
    // mots.substring(1) => Je récupère à partir de la première lettre
    phraseAvecMajuscule += mot.charAt(0).toUpperCase() + mot.substring(1)  + " ";
}
console.log(phraseAvecMajuscule);