function breakTheText(){
let h1=document.querySelector("h1")
let h1text=h1.textContent


let splittedText=h1text.split("");

let clutter=""

splittedText.forEach(function(dets){
    clutter +=`<span> ${dets} </span>`
 
})
h1.innerHTML=clutter
}
breakTheText();

gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15
})