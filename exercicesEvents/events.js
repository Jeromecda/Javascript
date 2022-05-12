// Exercice 1 : Ajouter dans le html un input de type texte ainsi qu'un paragraphe vide
// Ecrire une fonction javascript déclenchée quand l'utilisateur saisi du texte dans l'input et qui affiche la saisie dans le paragraphe OPTION :
// Prendre en compte la suppression des lettres
    let button = document.getElementById("myButton");
    let paragraph = document.getElementById("myParagraph");

function textAdd() {  
    paragraph.textContent = button.value;
}
    
// Exercice 2 : Ajouter un champ de type password pour saisir le mot de passe et la confirmation du motDePasse.
// Faire une fonction javascript déclenchée quand l'utilisateur saisi du texte dans l'un des input pour afficher
// la vérification des mots de passe en temps réel dans un paragraphe en dessous

    let paragraphPassword = document.getElementById("myParagraphPassword");
    let password = document.getElementById("myPassword");
    let passwordConfirm = document.getElementById("myPasswordConfirm");

function checkPasswords() { 
    if(password.value == passwordConfirm.value) {  
        paragraphPassword.innerHTML = "Les mots de passes sont les mêmes";
    } else {
        paragraphPassword.innerHTML = "Les mots de passes ne sont pas les mêmes";
    }
}

// Exercice 3 : Ajouter un champ de type password pour saisir le mot de passe.
// Ajouter une icone avec un oeil. Au clic sur cet oeil, le mot de passe est révélé. Un autre clic cache le mot de passe.

let eye = document.getElementsByClassName("fa fa-eye");
let paragraphShow = document.getElementById("myParagraphShow");

function showPasswords() {
    paragraphShow.textContent = eye.click;
}
