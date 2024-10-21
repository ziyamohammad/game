let boxes=document.querySelectorAll(".tic");
let buttons=document.querySelector(".reset");
let traverse=document.querySelector(".visit");
let newbtn=document.querySelector(".new");
let msgContainer=document.querySelector(".msg");
traverse.style.display="none"; 
let turn=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn=true;
    enable();
    msgContainer.classList.add("hide");
    traverse.style.display="none"; 

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
            
        }
        box.disabled=true;
        checkwinner();
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
    const enable=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };


const showWinner = (winner)=>{
         msgContainer.innertext=`Congratulations Winner Is ${winner}`;
         msgContainer.classList.remove("hide");
         disable();
};
let checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val;
        let pos2val;
        let pos3val;
         pos1val =boxes[pattern[0]].innerText;
         pos2val=boxes[pattern[1]].innerText;
         pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showWinner(pos1val);
            traverse.style.display="flex";
        }
        
    }
}
};
newbtn.addEventListener("click",resetgame);
buttons.addEventListener("click",resetgame);



