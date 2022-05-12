// 3) Mettre en majuscule la première lettre de chaque mot d’une phrase.

let phraseMinuscule = "une phrase sans majuscule";
let maj;
// Séparer la phrase par mots
let mots = phraseMinuscule.split(" ");
// Mettre en majuscule
function capitalizeFirstLetter(mots) {
    return mots.charAt(0).toUpperCase() + mots.slice(1);
}

console.log(mots);