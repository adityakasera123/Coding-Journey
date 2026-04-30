let userInp=document.getElementById("input");
let btn=document.getElementById("btn");
let error=document.getElementById("error");
let taskDone=document.getElementById("TaskDone");

btn.onclick=function(){

    let task=userInp.value;

    if(task===""){
        error.style.display="block";
        return;
    }
    error.style.display="none";

    let li=document.createElement("li");
    li.innerText=task;

    let del=document.createElement("button");
    del.innerText="delete";

    del.onclick=function(){
        li.remove();
    }

    taskDone.appendChild(li);

    li.appendChild(del);

    userInp.value="";
    
}