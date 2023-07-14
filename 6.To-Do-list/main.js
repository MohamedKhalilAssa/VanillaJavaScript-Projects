let taskDiv =document.querySelector(".tasks");
let btn =document.querySelector(".submit");
let input =document.querySelector(".text");
let currHeight=11;

//Adding task button configuration 
btn.addEventListener("click",(target)=>{
    //to avoid the submit
    target.preventDefault();
        
    //function to create a new task
      CreateTask(input.value);
      
    //deleting tasks configuration
    let deleteButton=document.querySelectorAll(".delete");
        deleteButton.forEach((btn)=>{
        btn.addEventListener("click",function(){
        console.log('test');
        btn.parentElement.remove();
        if(currHeight>14){
            currHeight-=6;
            taskDiv.style.height=`${currHeight}vh`;
        }
        
       })  
      })
    //deleting
    input.value='';
});


function CreateTask(text){
    // creating a new div for the task and appending it
    let newD= document.createElement("div");
    let newT=document.createElement('p');
    newT.textContent=text;

    //button config
    let button= document.createElement('button');
    button.setAttribute("class","delete")
    button.textContent='Delete';
    
    newD.appendChild(newT);
    newD.appendChild(button);
    newD.classList.add('inTask');
    

    //styling div and appending to it
    if(taskDiv.childElementCount>=1){
    currHeight+=10;
    taskDiv.style.height=`${currHeight}vh`;
    }
    taskDiv.appendChild(newD);
}