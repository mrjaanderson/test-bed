var header = document.querySelector("header");
var h1 = document.getElementById("rgbCode");
var msg = document.getElementById("gameMsg");
var newGame = document.getElementById("newGame");
var mode = "hard";
var squares = document.querySelectorAll('span');
var len = function(){
    if(mode === "hard"){
        return 6;
    } else {
        return 3;
    }
};
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var hidden = document.querySelectorAll(".row")[1];
var rgbSquares = [];
var selectedRGB = "";

function squareSize() {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.height = squares[0].offsetWidth + "px";
    }
};

function squareColors(){
    selectedRGB = "";
    for(var i = 0; i < len(); i++){
        var randomRGB = "rgb(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ")";
        squares[i].style.background = randomRGB;
        rgbSquares.push(randomRGB);        
    }
    return selectedRGB = rgbSquares[Math.floor(Math.random() * len())];
}

function setClicks() {
    for(var i = 0; i < len(); i++){
        squares[i].addEventListener("click", function(){
            if(this.style.background == selectedRGB){
                msg.textContent = "You Win!";
                header.style.background = selectedRGB;
                newGame.textContent = "Play Again?";
                for(var j = 0; j < squares.length; j++){
                    squares[j].style.background = selectedRGB;
                }
            } else {
                this.style.background = "transparent";
                this.style.transition = "background 1s";
                msg.textContent = "Try Again";
            }
        });
    }
}

function selectButton(){
    if(mode == "hard"){
        hard.classList.add("selected");
        easy.classList.remove("selected");
    } else {
        easy.classList.add("selected");
        hard.classList.remove("selected");
    }
}

function gameInit(){
    rgbSquares = [];
    squareSize();
    squares = document.querySelectorAll('span');
    squareColors();
    setClicks();
    selectButton();
    h1.textContent = selectedRGB;
    msg.textContent = "";
    newGame.textContent = "NEW COLOR";
    header.style.background = 'rgb(75, 127, 206)';
}

window.addEventListener("resize", function(){
    squareSize();
});

newGame.addEventListener("click", function(){
    gameInit();
});

hard.addEventListener("click", function(){
    mode = "hard";
    hidden.classList.remove("hide");
    gameInit();
});

easy.addEventListener("click", function(){
    mode = "easy";
    hidden.classList.add("hide");
    gameInit();
});

gameInit();