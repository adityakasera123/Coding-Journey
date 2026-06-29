function storeTemporaryTheme(themeName){
localStorage.setItem("currentTheme",themeName)
let themeSaved=localStorage.getItem("currentTheme");
console.log(themeSaved);

let box = document.getElementById("box");

box.style.backgroundColor=themeSaved;

if(themeSaved=="Dark"){
    box.style.backgroundColor="black";
    box.style.color="white";
}
box.innerText=themeSaved;
}
let themeSaved = localStorage.getItem("currentTheme");
if(themeSaved){
    let box =  document.getElementById("box");
    if(themeSaved=="Dark"){
        box.style.backgroundColor="black";
    }
else{
    box.style.backgroundColor=themeSaved;
}
box.style.color="white";
box.innerText=themeSaved;
}