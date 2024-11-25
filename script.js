let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".messagecontainer");
let msg = document.querySelector("#msg");
let restart = document.querySelector(".restart");
let newGme = document.querySelector(".newGame");

let turnO = true; //{player-1, Player-2}
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
] 
const restartGame = () => {
    turnO = true;
    enableboxes();
    msg.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
})
const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    };
    };
const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const displayWinner = (winner) => {
    msg.innerText = `The winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns){
            let val1 = boxes[pattern[0]].innerText;
            let val2 = boxes[pattern[1]].innerText;
            let val3 = boxes[pattern[2]].innerText;

            if (val1 != "" && val2 !="" && val3 !=""){
                if (val1 === val2 && val2 === val3){
                  displayWinner(val1);
                }
            }
    }
}

newGme.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame)