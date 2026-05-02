let userInput=document.getElementById("input");
let btn=document.getElementById("btn");
let btnClear=document.getElementById("btnClear");
let error=document.getElementById("error");
let list=document.getElementById("listItem");

btn.onclick=function(){

    let task=userInput.value;


    if(task===""){
        error.style.display="block";
        return;
    }
    error.style.display="none";


    let li=document.createElement("li");
    li.innerText=task;
    list.appendChild(li);


    li.onclick=function(){
       li.style.color="grey";
       li.style.textDecoration="line-through";
    }

    userInput.value = "";

        btnClear.onclick=function(){
                list.innerHTML="";
        }


}

