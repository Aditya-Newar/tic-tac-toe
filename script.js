const winningPattern =   [
                           [0,1,2],
                           [3,4,5],
                           [6,7,8],
                           [0,3,6],
                           [1,4,7],
                           [2,5,8],
                           [0,4,8],
                           [2,4,6],
                         ];
let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".newGame");
let restart = document.querySelector(".reset");
let winMsg = document.querySelector(".msg");
let msgContainer = document.querySelector(".message-container")


let turnO = true;//identifying the turn of players
//taking input from player-X & player-Y
boxes.forEach ((box) => {
    box.addEventListener("click", () => {
           if (turnO){
            box.innerText = "O";
            box.classList.add("colorO")
            turnO = false;
           }else{
            box.innerText = "X";
            box.classList.add("colorX")
            turnO = true;
           }
           box.disabled = true;
           checkWinner();
    });
});

//creating reset function 
const reset = () => {
    turnO = true;//reset turn to O
    enableBoxes();
    msgContainer.classList.add("hide");
};

//Winner Declaration
const showWinner = (winner) => {
    winMsg.innerHTML = `The winner of this round is ${winner}`;
    msgContainer.classList.remove("hide");

};

//check for the winner
const checkWinner = () =>{
    for (let pattern of winningPattern){
        
          let val1 = boxes[pattern[0]].innerText.trim();
          let val2 = boxes[pattern[1]].innerText.trim();
          let val3 = boxes[pattern[2]].innerText.trim();

          if (val1 != "" && val2 !="" && val3 != ""){
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                disableBoxes();
            };
          };
    };
};
//disable boxes after getting 1 winner
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    };
};
//enabling & clearing the boxes after game is over
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};


//adding event to reset button
restart.addEventListener("click",reset);
newGame.addEventListener("click",reset);
