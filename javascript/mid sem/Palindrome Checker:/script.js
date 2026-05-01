let input = document.getElementById("input");
let btn = document.getElementById("btn");
let error= document.getElementById("error");
let result = document.getElementById("Reslut");

btn.onclick=function(){
    let userInput = input.value.toLowerCase();

    if(userInput===""){
        error.style.display="block";
        result.innerText="";
        return;
    }
    error.style.display="none";

    let reverse= userInput.split("").reverse().join("");

    if(userInput === reverse){
        result.innerText="Palindrome";
    }
    else{
        result.innerText="not Palindrom";
    }


}
