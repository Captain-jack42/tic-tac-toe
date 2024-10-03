let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let message = document.querySelector("#txt")
let resetbtn = document.querySelector("#reset");
let newbtn =document.querySelector("#newbtn");
let inst = document.querySelector("#inst");

let turn = 0;
let count=0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = ()=>{
    turn =0;
    count=0;
    boxenable();
    winner.classList.add("hide");
};
inst.innerText="First, X turn";

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn==1){
            inst.innerText="Now, 'O' turn";
            box.innerText="X";
            box.style.color="rgb(12, 245, 55)";
            turn=0;
            count++;
        }else{
            inst.innerText="Now, 'X' turn";
        box.innerText="O";
        box.style.color="cyan";
        turn = 1;
        count++;
        }
        box.disabled=true;

        let isWinner = checkWinner();
         if(count==9 && isWinner!=0){
         showTie();
         }

    });
  
});
const boxenable = ()=>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText="";
    }

}
const boxDisable = ()=>{
    for(let i of boxes){  
        i.disabed = true;
    }

}

   const showTie =()=>{
    message.innerText=`Game is Tie between X and O`;
    winner.classList.remove("hide");
    boxDisable();
   }

  const showWinner = (winne)=>{
  message.innerText=`Congratulations, Winner is ${winne}`;
  winner.classList.remove("hide");
    boxDisable();

  }


    const checkWinner = () => {
    for(let pattern of winpattern){
    let posfirst = boxes[pattern[0]].innerText;
    let possec = boxes[pattern[1]].innerText;
    let posthird = boxes[pattern[2]].innerText;
    if(posfirst!="" && possec!="" && posthird!=""){
    if(posfirst===possec && possec===posthird){
        showWinner(posfirst);
        return true;

    }
  }
 }
};
