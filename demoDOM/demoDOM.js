// ------------------------------------------------ Initiation au DOM -------------------------------------------------

// "document" représente le point de départ de notre DOM
// 1 - Récupérer les éléments par id
let monParagraphe = document.getElementById("monParagraphe");
console.log(monParagraphe);

// 2 - Récupérer par la classe
let contenus = document.getElementsByClassName("contenu");
// boucle for
for(let i = 0; i < contenus.length; i++) {
    console.log(contenus[i]);
}
// boucle for -> même code qu'au dessus écrit différemment
for(let contenu of contenus) {
    console.log(contenu);
}

// 3 - Récupérer par le type de balise
let articles = document.getElementsByTagName("article");
console.log(articles);

// 4 - Sélection complexe unique
let paragrapheContenu = document.querySelector("#maDiv p.contenu");
console.log(paragrapheContenu);

// 5 - Sélection complexe multiple
let elements = document.querySelectorAll("p, article");
console.log(elements);


// ------------------------------------------------ Modifier le DOM -------------------------------------------------

// Modifier le contenu d'un paragraphe
let p = document.getElementById("monParagraphe");
// 1 - textContent : permet d'insérer du texte dans un élément
// 2 - innerHTML : permet d'insérer du HTML dans un élément
p.textContent = "Message généré par <strong>javascript</strong>";   // textContent ne lit pas les balises
p.innerHTML = "Message généré par <strong>javascript</strong>";     // il est préférable d'utiliser innerHTML donc

// Modifier la classe d'un élément
p.classList.add("rouge");

// Modifier le style
p.style.color = "red";

// Fabriquer des nouveaux éléments dans le DOM
let maDiv = document.getElementById("maDiv");   // je récupère ma div
let input = document.createElement("input");    // je fabrique un input
input.setAttribute("type", "password");         // je le mets en type password
maDiv.appendChild(input);                       // je n'oublie pas d'ajouter mon élément au DOM !!!
