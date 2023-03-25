const hex =["A", "B", "C","D","E", "F",0,1,2,3,4,5,6,7,8,9];
const btn=document.getElementById("btn");
const color=document.querySelector('.color');

btn.addEventListener("click",function(){
    let total=0;
    let hexColor=""
    while(total < 6){
        let random= RandomFromArray();
        hexColor+=hex[random];
        total+=1;
    }
    document.body.style.backgroundColor= '#'+ hexColor;
    color.textContent='#' + hexColor;
});

let RandomFromArray = () => Math.floor(Math.random()*hex.length);