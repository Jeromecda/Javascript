// 1) A l'aide de la méthode Math.random, écrivez un programme qui s'arrête lorsque tous les nombres de la plage [0;100[ sont tirés au sort.

let array = [];
// let random = Math.floor(Math.random() * 100);
let i = 0;

function stopWithMathRandom(array) {
    let random = Math.floor(Math.random() * 100);

    while (i <= random.length) {
        array.push(random);
        i++;
    }
    return random;  
}

console.log(stopWithMathRandom(array));


// for(let i = 0; i < random.length; i++) {
//     console.log(random[i]);
// }