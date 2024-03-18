let allBtn = document.querySelectorAll("#box");
let startBtn = document.querySelector("#start-btn");
let winMsg = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


let playerTurn = true;

allBtn.forEach(btn =>{
  btn.addEventListener("click", ()=>{
    if(playerTurn){
      btn.innerHTML= "O"
      playerTurn = false;
    }else{
      btn.innerHTML= "X"
      playerTurn = true;
    } btn.disabled = true;
    checkWinner()
  }) 
});

const checkWinner = ()=>{
  for(let pattern of winPattern){
    let val1 = allBtn[pattern[0]].innerHTML
    let val2 = allBtn[pattern[1]].innerHTML
    let val3 = allBtn[pattern[2]].innerHTML

    if(val1 !== "" && val2 !=="" && val3 !== "" ){
      if(val1 === val2 && val2 === val3){
        showWinner(val1)
      }
      
    }
  }
}

const showWinner = (e)=>{
  winMsg.classList.remove("hide");
  msg.innerHTML = `congratulation the Winner is ${e}`;
  disBtn();
}

const disBtn = ()=>{
  for(let btn of allBtn){
    btn.disabled = true;
    btn.innerHTML= "";
  }
}

startBtn.addEventListener("click", ()=>{
  for(let btn of allBtn){
    winMsg.classList.add("hide");
    btn.disabled = false;
  }
});

resetBtn.addEventListener("click", ()=>{
  for(let btn of allBtn){
    winMsg.classList.add("hide");
    btn.innerHTML= "";
    btn.disabled = false;
  }
})