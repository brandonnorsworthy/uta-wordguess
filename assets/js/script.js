//elements
startBtn = document.querySelector("#startBtn");
wordDisplay = document.querySelector("#wordDisplay");
winDisplay = document.querySelector("#winDisplay");

//global variables
wordsToChooseFrom = ["javascript", "string", "object", "method", "null", "undefined"];
chosenWord = '';
chosenWordArr = []
guessedWord = '';

function winScenario(){
    winDisplay.textContent = "You Win!"; //confirm to user win condition was met
}

function fillPTag(){
    wordDisplay.textContent = guessedWord; //display guessed letters
}

function checkKeyAgainstWord(event) {
    //if event.key matches any character in our chosen word
    if (chosenWord.includes(event.key.toLowerCase()) && !(event.key == " ")) {
        chosenWordArr.forEach((char, i) => {
            if (char == event.key.toLowerCase()){
                var firstPartOfWord = guessedWord.substr(0, i);
                var secondPartOfWord = guessedWord.substr(i + 1, guessedWord.length);
                guessedWord = firstPartOfWord + char + secondPartOfWord;
                console.log(guessedWord)
            }
        });

        wordDisplay.textContent = guessedWord; //display guessed letters

        if (!guessedWord.includes("_")){
            winScenario();
        }
    }
}

function chooseRandomWord() {
    winDisplay.textContent = "";

    chosenWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)];
    guessedWord = ''
    for (let index = 0; index < chosenWord.length; index++) {
        guessedWord += '_'
    }

    chosenWord = chosenWord.split("").join(" ");
    guessedWord = guessedWord.split("").join(" ");
    chosenWordArr = chosenWord.split("");
    console.log(chosenWordArr)
    console.log(chosenWord)
    console.log(guessedWord);

    fillPTag();
}

document.addEventListener("keydown", checkKeyAgainstWord);
startBtn.addEventListener("click", chooseRandomWord);