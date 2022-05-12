// - créer un nouvel élément de type paragraphe
let p = document.createElement("p");           

// - ajouter le texte "Salut tout le monde !" dans ce paragraphe
// p.innerHTML = "Salut tout le <span style=\"font-weight: bold\">monde</span>";
p.innerHTML = "Salut tout le <span id = \"monde\">monde</span>";

// - créer un élément de type div ayant pour id "divJavascript"
let div = document.createElement("div");
div.setAttribute("id", "divJavascript");

// - ajouter le paragraphe créer dans la question 1 dans le div
div.appendChild(p);

// - changer le couleur du paragraphe en bleu et mettre le mot "monde" en gras
p.style.color = "blue";

// - ajouter le div dans votre body
document.body.appendChild(div);
monde.style.fontWeight = "bold";


