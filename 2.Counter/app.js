let count=0; 
let span =document.getElementById('span');
let increase=document.querySelector(".increase");
let reset=document.querySelector(".reset");
let decrease=document.querySelector(".decrease");

reset.addEventListener('click',function(){
    count=0
    span.textContent=count; 
    span.style.color='black'
});
increase.addEventListener("click", function(){
    span.textContent = ++count;
    if(span.textContent>0){
        span.style.color='green';
    }
    else if (span.textContent<0){
        span.style.color='red';
    }
    else{
        span.style.color='black';
    }
});
decrease.addEventListener("click", function(){
    span.textContent = --count;
    if(span.textContent>0){
        span.style.color='green';
    }
    else if (span.textContent<0){
        span.style.color='red';
    }
    else{
        span.style.color='black';
    }
});