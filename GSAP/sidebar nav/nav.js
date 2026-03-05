let cross=document.querySelector("#full i");
let menu=document.querySelector("#nav i");

let tl=gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.5
})
tl.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.1,
    opacity:0
})

tl.from("#full i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
tl.restart()
})
cross.addEventListener("click",function(){
  gsap.to("#full",{
    right:"-40%",
    duration:0.5
  })

})