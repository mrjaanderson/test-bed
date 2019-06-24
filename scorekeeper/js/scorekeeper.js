var playerOne = 0;
var playerTwo = 0;
var playToInput = document.getElementById('playTo');
var playTo = Number(playToInput.getAttribute("value"));
var finished = false;

var p1button = document.querySelector('#playerOne');
var p2button = document.querySelector('#playerTwo');
var reset = document.querySelector('#reset');
var spans = document.getElementsByTagName("span");
var winner = document.querySelector("#winner");

function updateScore(){
    document.querySelector('h1').innerHTML = `<span>${playerOne}</span> to <span>${playerTwo}</span>`;
}

function updatePlayTo(){
    document.querySelector('p').innerText = `Playing to: ${playTo}`;
}

function gameContinue() {
    finished = false;
    for(var i; i < spans.length; i++){
        spans[i].style.color = "black";
    }
    winner.textContent = "";
    updateScore();
}

function isFinished(){
    if(playerOne === playTo || playerTwo === playTo){
        if(playerOne === playTo){
            spans[0].style.color = "green";
            winner.textContent = "Player One Wins!";
        } else {
            spans[1].style.color = "green";
            winner.textContent = "Player Two Wins!";
        }
        return finished = true; 
    }
}

p1button.onclick = () => {
    if(playerOne < playTo && !finished){
        playerOne++;
        updateScore();
        isFinished();
    }
};

p2button.onclick = () => {
    if(playerTwo < playTo && !finished){
        playerTwo++;
        updateScore();
        isFinished();
    }
};

playToInput.oninput = () => {
    if(finished && playTo < playToInput.value){
        gameContinue();
        updateScore();
    }
    playTo = Number(playToInput.value);
    updatePlayTo();    
}

reset.onclick = () => {
    playerOne = 0;
    playerTwo = 0;
    gameContinue();
    playTo = 5;
    playToInput.value = 5;
    updatePlayTo();
};

updateScore();
updatePlayTo();