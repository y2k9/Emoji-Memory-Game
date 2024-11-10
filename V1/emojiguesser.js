//basic elements
const emojiCard = document.getElementById("displayCard");
const emoji = document.getElementById("emoji");
const flipped = document.getElementById("flippedCard");
const superButton = document.getElementById("superButton");
const submit = document.getElementById("submit");

//test elements 
currentCard = null;


//list of emojis
const pizza= { symbol:"🍕", names: "pizza"};
const basketball= { symbol:"🏀", names: "basketball"};
const goose= { symbol:"🪿", names: "goose"};
const camera= { symbol:"📸", names: "camera"};
const cherry= { symbol:"🍒", names: "cherry"};

const emojis = [pizza,basketball,goose,camera,cherry];

console.log(emojis);



function randomItem() {
    console.log("randomItem function");
    let x = Math.floor(Math.random() * emojis.length);
    return emojis[x];
}

function createCard() {
    console.log("createCard function");
    currentCard = randomItem();
    console.log(currentCard);
    emoji.innerHTML = currentCard.symbol ;
}


function checkIfCorrect() {
    console.log("checkIfCorrect function");
    let input = document.getElementById("guesses").value.trim();
    console.log(input);

    if ( input == currentCard.names) {
        console.log("Correct!");
    } else {
        console.log("Wrong af!");
    }
}

// event listeners

superButton.addEventListener("click",createCard);
submit.addEventListener("click",checkIfCorrect);




//game loop 




