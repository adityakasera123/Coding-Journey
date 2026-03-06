function breakTheText(){
let h1=document.querySelector("h1")
let h1text=h1.textContent

let splittedText=h1text.split("");

let halfValue=splittedText.length/2

let clutter=""

splittedText.forEach(function(dets,indx){
    if(indx<halfValue){

          clutter +=`<span class="a"> ${dets} </span>`
    }
    else{
    clutter +=`<span class="b"> ${dets} </span>`
    }
})
h1.innerHTML=clutter
}
breakTheText();

gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15
})