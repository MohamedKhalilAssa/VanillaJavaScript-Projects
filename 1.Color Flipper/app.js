const colors = ["red","green","rgba(133,122,200)","#f01548" ];
const btn =document.getElementById("btn");  
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
   // random number to move through the array 
    const random=RandomNumber(); 
    
    document.body.style.backgroundColor= colors[random];
    color.textContent= colors[random];
})

let RandomNumber = ()=> Math.floor(Math.random()*colors.length);