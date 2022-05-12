//Question 1

let tabChiffre = [];
let nbTentative = 0;

for(let i = 0; i < 100; i++){
    tabChiffre.push("");
}

let compteur = tabChiffre.length;
do{
    let tirage = parseInt(Math.random()*100);

    if(tabChiffre[tirage] === ""){
        tabChiffre[tirage] = tirage;
        compteur--;
    }
    nbTentative++;
}while(compteur > 0);

console.log(tabChiffre);
console.log("Nombre de tirage nécessaires : "+nbTentative);
console.log("");

//Question 2

let phrase = "Une chaine avec des lettres dans un certain ordre pour donner du sens";
let tabPhrase = Array.from(phrase.replace(/ /g,''));

console.log(phrase);
console.log(tabPhrase);
tabPhrase.sort();
console.log(tabPhrase);
console.log(tabPhrase.join(""));
console.log("");

// Question 3

function capitalizeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
  }

let phrase2 = "une phrase sans majuscule";
let tabPhrase2 = phrase2.split(" ");
let tabResult = capitalizeWords(tabPhrase2);

console.log(phrase2);
console.log(tabPhrase2);
console.log(tabResult);
console.log(tabResult.join(" "));
console.log("");

//BONUS

function printTab(tab){
   return tab.join(", ")
}

function equalOrMoreThanTen(tab){
    let compteur = 0;
    tab.forEach(element => {
        if(element >= 10){
            compteur++;
        }
    });
    return compteur;
}

function lessThanTen(tab){
    let compteur = 0;
    tab.forEach(element => {
        if(element < 10){
            compteur++;
        }
    });
    return compteur;
}

function average(tab){
    let total = 0;
    tab.forEach(element => {
        total = total + element;
    });
    return total/tab.length;
}

function maximum(tab){
    let max = 0;
    tab.forEach(element => {
        if(element > max){
            max = element;
        }
    });
    return max;
}

function minimum(tab){
    let min = 100;
    tab.forEach(element => {
        if(element < min){
            min = element;
        }
    });
    return min;
}

function noteSearch(tab,note){
    let retour = "Non";
    if(tab.includes(10)){
        retour = "Oui"
        return retour;
    }
    return retour;
}

let tabNotes = [];
let tailleTab = 10;
let noteSpecific = 10;
for(let i = 0; i < tailleTab; i++){
    tabNotes.push(parseInt(Math.random()*20));
}

console.log(tabNotes);
console.log("Notes des élèves : "+ printTab(tabNotes));
console.log("Nombre de notes supérieurs ou égales à 10 : : "+ equalOrMoreThanTen(tabNotes));
console.log("Nombre de notes inférieurs ou égales à 10 : : "+ lessThanTen(tabNotes));
console.log("Moyenne des notes : "+ average(tabNotes));
console.log("Note maximale : "+ maximum(tabNotes));
console.log("Note maximale : "+ minimum(tabNotes));
console.log("Note "+ noteSpecific + " existe ? : " + noteSearch(tabNotes,noteSpecific));