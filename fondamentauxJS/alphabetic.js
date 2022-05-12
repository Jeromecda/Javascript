// 2) Trier les lettres d’une phrase par ordre alphabétique. La phrase utilisée dans la solution est la suivante :

let phraseDepart = "une chaine avec des lettres dans un certain ordre pour donner du sens";
// Séparer la phrase par mots
let mots = phraseDepart.split(" ");
// Trier par odre alphabétique
let trier = mots.sort();

console.log(trier);