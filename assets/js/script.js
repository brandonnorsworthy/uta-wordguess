wordsToChooseFrom = ["javascript", "string", "object", "method", "null", "undefined"];
chosenWord = '';
chosenWordArr = []
guessedWord = '';

function checkKeyAgainstWord(event) {
    //if event.key matches any character in our chosen word
    console.log(event.key)
    if (chosenWord.includes(event.key.toLowerCase()) && !(event.key == " ")) {
        console.log("guess correctly")
        chosenWordArr.forEach((char, i) => {
            if (char == event.key.toLowerCase()){
                console.log("character match", char, i)
                guessedWord[i] = char;
                console.log(guessedWord);
            }
        });
    }
}

function chooseRandomWord() {
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
}

document.addEventListener("keydown", checkKeyAgainstWord);

chooseRandomWord();

/* 
1. ✅ keydown working
2. ✅ array of a couple of words to choose from
3. ✅ see if that key thats pressed matches the word that was chosen
4. ✅ second string for whats guessed
5. fill guessed word with underscores
6. when they press a key if it matches add the correct character in the place of the underscore
7. 
8.
 */