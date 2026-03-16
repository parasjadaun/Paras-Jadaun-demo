const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
    let msgcontainer=document.querySelector(".msg-container");
  let msg=document.querySelector("#msg")
let turn0=true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
    if(turn0===true){
        box.innerText="O";
        box.style.color="blue";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
         box.style.color="black";
    }
    box.disabled=true;
 cheackwinner();}
)
    }
);
const reset=()=>{
turn0=true;
enable_newgame_boxes();
msgcontainer.classList.add("hide");
}
const disable_remaing_boxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
};
const enable_newgame_boxes=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};
const showWinner=(winner)=>{
    msg.innerText=`The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable_remaing_boxes();
};
const cheackwinner=()=>{
    for(let pattern of winPatterns){
         //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2 !=""&&pos3 !=""){
           if(pos1===pos2&&pos2===pos3){
            console.log("Winner",pos1);
            showWinner(pos1);
           }
        }
    }
};
newGamebtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);
