const emojis = [
    {symbol:"🍕", names: "pizza"},
    { symbol:"🏀", names: "basketball"},
    { symbol:"🪿", names: "goose"},
    { symbol:"📸", names: "camera"},
    { symbol:"🍒", names: "cherry"},
]

//variables 
let gameStatus = "active";
let cardList = [];
let nodeList = [];
let currentCard = null;
let emoji = null;
let card = null;
let numberOfCards = 1;

//elements
board = document.getElementById("gameboard");

// draw start button
const start = document.createElement("button");
start.className = "startbutton";
board.appendChild(start);
start.innerHTML = "Start";


start.addEventListener("click",gameloop)
start.addEventListener("click",startGuessing)

function randomItem() {
    let x = Math.floor(Math.random() * emojis.length);
    return emojis[x];
}

function createCard() {

    for (let i = 0; i < numberOfCards; i++)  {
        card = document.createElement("div");
        nodeList.push(card);
        card.className = "emojiCard";
        board.appendChild(card);
        currentCard = randomItem();
        cardList.push(currentCard);
        let emoji = document.createTextNode(currentCard.symbol); // Create text node for the emoji
        card.appendChild(emoji);
    }
    
}

function flipCard() {

    console.log(nodeList);
    for (x in nodeList) {
        const back = document.createElement("div");
        back.className = "backCard";
        x.innerHTML = "";
        x.style.background = "grey";
    }
    
    
}

function startGuessing() {
    let guessSpace =  document.getElementById("guessSpace");

    const guessBox = document.createElement("input");
    guessBox.id = "guessbox";
    guessBox.type = "text";
    guessBox.placeholder = "emoji";
    
    const submitButton = document.createElement("button");
    submitButton.className = "submitButton";
    submitButton.type = "button";
    submitButton.innerText = "Submit";
    


    guessSpace.appendChild(guessBox);
    guessSpace.appendChild(submitButton);
    // let textField = guessbox.appendChild("div");
    // let submit = guessbox.appendChild("button"); 
    submitButton.addEventListener("click",checkGuess);
    guessBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          checkGuess();
        }
      });
}


function checkGuess() {
    // check input 
    let input = document.getElementById("guessbox").value.trim();
    if (input == currentCard.names) {
        console.log("Correct!");
        unflipCard();
        setTimeout(clearBoard, 2000);
        numberOfCards++;
        setTimeout(createCard, 3000);
    } else {
        console.log("Wrong :(");
    }
    document.getElementById("guessbox").value = "";
}

function unflipCard() {
    card.innerHTML = currentCard.symbol;
    card.style.background = "white";
}


function clearBoard() {
    card.remove();
}


//createCards 
function gameloop() {
    start.remove();
    createCard();
    setTimeout(() => flipCard(), 1000);   //in case I need to pass in var
}


// game loop
    //create a card
    //flip card
    //show guesser 
    //validate
    // flip card again
    //ask if they want to play again



// end game 


function byeBye() {
    const byebye = document.createElement("div");
    byebye.className = "byebye";
    board.appendChild(byebye);
}