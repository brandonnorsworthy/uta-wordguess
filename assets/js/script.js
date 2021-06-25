startBtn = document.querySelector("#startBtn");
wordDisplay = document.querySelector("#wordDisplay");
winDisplay = document.querySelector("#winDisplay");

wordsToChooseFrom = ["javascript", "string", "object", "method", "null", "undefined"];
chosenWord = '';
chosenWordArr = []
guessedWord = '';

function winScenario(){
    winDisplay.textContent = "You Win!";
}

function fillPTag(){
    wordDisplay.textContent = guessedWord;
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

        fillPTag();

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

/* 
1. ✅ keydown working
2. ✅ array of a couple of words to choose from
3. ✅ see if that key thats pressed matches the word that was chosen
4. ✅ second string for whats guessed
5. ✅ fill guessed word with underscores
6. ✅ when they press a key if it matches add the correct character in the place of the underscore
7. ✅ button, display blanks,
7. build a timer, display timer
8. display win
 */