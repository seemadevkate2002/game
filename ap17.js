console.log("hii")

let gameseq = [];
let userseq = [];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started==false){
   console.log("gate started Game.");
   started=true;

   levelup();
 } 
});


function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)          //1000=1 second
};



function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250)          //1000=1 second
};




function levelup(){
  userseq=[];
  level++;
  h2.innerText=`level ${level}`;

  //choose random button
  let randomidx = Math.floor(Math.random()*3);
  let randomcolor = btns[randomidx];
  let randombtn = document.querySelector(`.${randomcolor}`);
  
  gameseq.push(randomcolor);
  console.log(gameseq);
   //console.log("button is-",randombtn);
   //console.log("btn colo-r",randomcolor);
   //console.log("btn index-",randomidx);

   btnflash(randombtn);
}



function cheakans(){
  //console.log("current level : ",level);
  let idx=level-1;
  if(userseq[idx]===gameseq[idx])
  {
    if(userseq.length === gameseq.length){
      setTimeout(levelup,1000);
    }
    //console.log("same value");
  }
  else{
    h2.innerHTML=` Game over!  your score was <b>${level} </b> <br> press any key to start.`;
   document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    //reset();
  }
}


function btnpress(){
  //console.log(this)
  let btn=this;
  userflash(btn);

 let usercolor=btn.getAttribute("id");
 console.log(usercolor);
 userseq.push(usercolor);

 cheakans(userseq.length-1);

}


let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
  btn.addEventListener("click",btnpress)
};


//this function was used to again restarting the game again after presing any key and call this function in cheakans function.
/* function reset(){
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
};*/
