let b= document.getElementById("bars");
let c=document.getElementById("games");
let bu=document.getElementById("buggy");
let z=document.querySelectorAll('p');
let pu=document.querySelector(".photo");
let cu=document.querySelector(".child1");
let du=document.querySelector(".child2");
let eu=document.querySelector(".child3");
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    b.style.bottom=value*1.5+'px';
    c.style.bottom=value*1.5+'px';
    bu.style.bottom=value*1.5+'px';
    bu.style.right=value*1.5+'px';


    for(let p of z){
    p.style.bottom=value*1.5+'px';
    }
   
});
let turn=true;
document.addEventListener("keypress",()=>{
       if(turn===true){
        console.log("true");
        pu.innerText="";
        pu.innerHTML='<img src="news-1.jpg" height="100%" width="100%">';
        pu.style.border="10px solid blue";
        turn=false;
       }
       else{
        console.log("false");
        pu.innerText="";
        pu.innerHTML=' <img src="ctpagephoto.jpg" height="100%" width="100%">';
        pu.style.border="10px solid white";
        turn=true;
       }
});
let tr=true;
let original=cu.innerHTML;
cu.addEventListener("click",()=>{
    if(tr===true){
        cu.innerHTML=' <img src="news-4.jpg" height="300%" width="100%"><p style="font-family:myfont; color:white;">Kraftons popular battle royale game, BGMI, has received full approval from the Indian government after passing a three-month audit. The game was suspended in September 2021 over concerns about data security and addiction. It was allowed to resume on a three-month trial basis in May 2023 and has now passed the audit.</p>';
         tr=false;
    }
    else{
        cu.innerHTML=original;
        tr=true;
    }
     
});
let original1=du.innerHTML;
du.addEventListener("click",()=>{
    if(tr===true){
        du.innerHTML=' <img src="news-5.jpg" height="300%" width="100%"><p style="font-family:myfont; color:white;">Kraftons popular battle royale game, BGMI, has received full approval from the Indian government after passing a three-month audit. The game was suspended in September 2021 over concerns about data security and addiction. It was allowed to resume on a three-month trial basis in May 2023 and has now passed the audit.</p>';
         tr=false;
    }
    else{
        du.innerHTML=original1;
        tr=true;
    }
     
});
let original2=eu.innerHTML;
eu.addEventListener("click",()=>{
    if(tr===true){
        eu.innerHTML=' <img src="news-6.jpg" height="300%" width="100%"><p style="font-family:myfont; color:white;">Kraftons popular battle royale game, BGMI, has received full approval from the Indian government after passing a three-month audit. The game was suspended in September 2021 over concerns about data security and addiction. It was allowed to resume on a three-month trial basis in May 2023 and has now passed the audit.</p>';
         tr=false;
    }
    else{
        eu.innerHTML=original2;
        tr=true;
    }
     
});



