wordsToChooseFrom = ["javascript", "string", "object", "method", "null", "undefined"];
chosenWord = '';
guessedWord = 'f b A'

function checkKeyAgainstWord(event) {
    //if event.key matches any character in our chosen word
    if (chosenWord.includes(event.key.toLowerCase())) {

    }
}

function chooseRandomWord() {
    chosenWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)];
    chosenWord = chosenWord.split("").join(" ");
    console.log(chosenWord);
}

document.addEventListener("keydown", checkKeyAgainstWord);

chooseRandomWord();

/* 
1. ✅ keydown working
2. ✅ array of a couple of words to choose from
3. see if that key thats pressed matches the word that was chosen
4. second string for whats guessed
5. 
6.
7.
8.
 */