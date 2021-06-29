//elements
var startBtn = document.querySelector("#startBtn");
var wordDisplay = document.querySelector("#wordDisplay");
var winDisplay = document.querySelector("#winDisplay");

//global variables
var wordsToChooseFrom = ["javascript", "string", "object", "method", "null", "undefined"]; //list of words to choose from
var chosenWordArr = [] //array of all characters in chosen word (no spaces)
var chosenWord = ''; //string to match guessed word but with solution of characters
var guessedWord = ''; //string to fill with underscores and slowly reveal

function winScenario(){
    winDisplay.textContent = "You Win!"; //confirm to user win condition was met
}

function fillPTag(){
    wordDisplay.textContent = guessedWord; //display guessed letters
}

//event function to check the keyboard key value
function checkKeyAgainstWord(event) {
    //if event.key matches any character in our chosen word
    if (chosenWord.includes(event.key.toLowerCase()) && !(event.key == " ")) { //only continue if key is contained inside word
        chosenWordArr.forEach((char, i) => { //loop over all word characters
            if (char == event.key.toLowerCase()){ //if current char matches key
                var firstPartOfWord = guessedWord.substr(0, i); //split first string using index
                var secondPartOfWord = guessedWord.substr(i + 1, guessedWord.length); //split other part of string using index
                guessedWord = firstPartOfWord + char + secondPartOfWord; //insert correct character at location of the underscore to reveal
            }
        });

        fillPTag();

        if (!guessedWord.includes("_")){ //if theres no more missing characters reveal that user wins!
            winScenario();
        }
    }

    return;
}

//
function chooseRandomWord() {
    winDisplay.textContent = ""; //reset the win to blank if user pressed on start a new round

    chosenWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)]; //choose a random index in the words to choose from
    guessedWord = '' //set guessed word back to blank
    for (let index = 0; index < chosenWord.length; index++) {
        guessedWord += '_' //using random word as a guide add same amount of `_` as characters
    }

    chosenWord = chosenWord.split("").join(" "); //split the new random word up
    guessedWord = guessedWord.split("").join(" "); //split the new random word up to match other string to easily replace it
    chosenWordArr = chosenWord.split(""); //split into an array to loop over characters later

    fillPTag(); //fill the tag because it doesnt get refreshed on new word
}

function init() {
    document.addEventListener("keydown", checkKeyAgainstWord);
    startBtn.addEventListener("click", chooseRandomWord);
}

init();