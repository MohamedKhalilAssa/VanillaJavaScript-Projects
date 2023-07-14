let taskDiv =document.querySelector(".tasks");
let btn =document.querySelector(".submit");
let input =document.querySelector(".text");
let currHeight=11;
let tasks=[];
let exec=0;
//checking localStorage
if(window.localStorage.getItem('beforeTasks')){
       let theArray=JSON.parse(window.localStorage.getItem('beforeTasks'));
       theArray.forEach((elem)=>{
        CreateTask(elem.task);
        //deleting tasks configuration
        
        let deleteButton=document.querySelectorAll(".delete");
        removeEventListeners(deleteButton)
        deleteButton=document.querySelectorAll(".delete");
        deleteButton.forEach((btn)=>{
            btn.addEventListener("click",function(e){
                e.stopPropagation();
                deleteFromStorage(e.currentTarget.previousSibling.textContent);
                Delete(e.currentTarget); 
            }
      )});
            
})}
//Adding task button configuration 
btn.addEventListener("click",(target)=>{
    //to avoid the submit
    target.preventDefault();
        let targetR=input.value;
    //function to create a new task
      CreateTask(targetR);
      console.log(targetR);
    //deleting tasks configuration
    let deleteButton=document.querySelectorAll(".delete");
    removeEventListeners(deleteButton)
    deleteButton=document.querySelectorAll(".delete");
        deleteButton.forEach((btn)=>{
            btn.addEventListener("click",function(e){
                e.stopPropagation();
                deleteFromStorage(e.currentTarget.previousSibling.textContent);
                Delete(e.currentTarget)} 
                   
      )});
    //deleting
    input.value='';
});

function Delete(btn){
    btn.parentElement.remove();
    
    if(currHeight>14){
        currHeight-=10;
        taskDiv.style.height=`${currHeight}vh`;
    }
}
function CreateTask(text){
    let initialTest=tasks.findIndex(ele=>{return ele.task === text});
    if(!(initialTest>-1) && text!=""){
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
    tasks.push({task:`${text}`});
    window.localStorage.setItem('beforeTasks',JSON.stringify(tasks));
    //styling div and appending to it
    if(taskDiv.childElementCount>=1){
    currHeight+=10;
    taskDiv.style.height=`${currHeight}vh`;
    }
    taskDiv.appendChild(newD);
}
}
function CreateTaskWithLocal(text){
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

function removeEventListeners(buttons) {
    buttons.forEach((btn) => {
      const clonedBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(clonedBtn, btn);
    })
}

function deleteFromStorage(target){
 let index= tasks.findIndex(ele=>{return ele.task === target});
 tasks.splice(index,1);
 window.localStorage.setItem('beforeTasks',JSON.stringify(tasks));
 console.log(index);
}