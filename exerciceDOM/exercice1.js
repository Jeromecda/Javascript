// 1 - Récupérer l'élément ayant pour id "main-content"
let main = document.getElementById("main-content");
console.log(main);

// 2 - Récupérer les éléments ayant la classe "important"
let important = document.getElementsByClassName("important");
console.log(important);

// 3 - Récupérer les élements articles
let articles = document.getElementsByTagName("article");
console.log(articles);

// 4 -Récupérer les élements "li" : Element 10, Element 11 et Element 12 en même temps
let elementsLi = document.querySelectorAll("div.important ul li");
console.log(elementsLi);

// 5 - Récupérer  l'élément li : Element 4 (2 solutions)
let li = document.querySelector("ul.important li");
console.log(li);
let liBis = document.querySelectorAll("ul.important li")[0];
console.log(liBis);

// 6 - Récupérer tous les premiers elements "li" de nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
let liElements = document.querySelectorAll("ul li:first-child");
console.log(liElements);
let liElementsBis = document.querySelectorAll("ul li:nth-child(1)");
console.log(liElementsBis);

let p = document.querySelector("p::first-line");
console.log(p);