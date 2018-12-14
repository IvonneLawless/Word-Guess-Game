// * Pseudo Code * //

//Create an array of 'Worst Jelly Bean Flavors of All Time!'
const worstFlavors = ["old van", "bones", "hair", "gasoline", "ryan reynolds", "boiled ice", "lightbulbs"];

//Get computer choice
let underscoreCount = Math.floor(Math.random() * worstFlavors.length);
let chosenWord = worstFlavors[underscoreCount]
let correctWord = [];
let incorrectWord = []; 
let underscore = []

//DOM commands
let docUnderscore = document.getElementsByClassName("underscore")
let docCorrectGuess = document.getElementsByClassName("correctGuess")
let docIncorrectGuess = document.getElementsByClassName("incorrectGuess")

console.log(chosenWord);

//Convert to underscore
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log (generateUnderscore());

//Grab users choice
document.addEventListener ("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
})

//If correct push to array

if(chosenWord.indexOf(worstFlavors) > -1) {
  correctWord.push(keyword); 
  underscore[chosenWord.indexOf(keyword)] = keyword;
  docUnderscore[0].innerHTML = underscore.join(' ');
  docCorrectGuess[0].innerHTML = correctGuess;



if(underscore.join('') == chosenWord) {
        alert("You win title of gross flavor lover")
  }
}

//If incorrect push to incorrect

else {
    incorrectWord.push(worstFlavors);
    docIncorrectGuess[0].innerHTML = incorrectWord;
}

docUnderscore[0].innerHTML = generateUnderscore().join(' ');