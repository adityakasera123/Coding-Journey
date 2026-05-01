let input = document.getElementById("input");
let btn = document.getElementById("btn");
let error= document.getElementById("error");
let result = document.getElementById("result");

btn.onclick=function(){
    let userInput=input.value.toLowerCase();

    if(userInput===""){
        error.style.display="block";
        return;
    }
    error.style.display="none";

    let count=0;
    let vowel="aeioi";
   
    for(let i=0; i<userInput.length; i++){
        if(vowel.includes(userInput[i])){
            count++;
        }
    }

    result.innerText="vowel: " + count; 
}