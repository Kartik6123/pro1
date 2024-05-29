let boxes=document.querySelectorAll(".box");
let m=document.querySelector(".msg");
let n=document.querySelector(".btn");
let r=document.querySelector(".r");
let turn=false;
let c=0;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
for(let i=0;i<boxes.length;i++){
    boxes[i].onclick=()=>{
        if(turn){
        boxes[i].innerText="X";
        turn=false;
    }
    else{
    boxes[i].innerText="O";
    turn=true;
    }
    c++;
boxes[i].disabled=true;
 let l=checkWinner();
 if(c===9 && !l){
         m.innerText="GAME IS A DRAW";
         m.classList.remove("hide");
         disable();
 }
}
}
let disable=()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].disabled=true;}
}
let enable=()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].disabled=false;}
}
let showWinner=(Winner)=>{ 
    m.innerText=`Congratulations WINNER IS ${Winner}`;
    m.classList.remove("hide");
    disable();
}
let checkWinner=()=>{
     for(let i=0;i<winPatterns.length;i++){
        let pattern=winPatterns[i];
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
             showWinner(pos1Val);
             return true;
     }
}}}
n.onclick=()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText='';
        m.classList.add("hide");
    }enable();
}
r.onclick=()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText='';
        m.classList.add("hide");
    }enable();
}
