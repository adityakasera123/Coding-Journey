let Usertext1 = document.querySelector(".text1");
let Usertext2 = document.querySelector(".text2");
let btn = document.getElementById("btn");
let error=document.querySelector(".error");
let table=document.getElementById("table");


btn.onclick=function(){
    let name = Usertext1.value;
    let age = Usertext2.value;

    if(name === "" || age===""){
        error.style.display="block";
        return;
    }
    error.style.display="none";

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerText=name;
    cell2.innerText=age;
   
    let del = document.createElement("button");
    del.innerText="Delete";

    del.onclick=function(){
        row.remove();
    }

    cell3.appendChild(del);

}