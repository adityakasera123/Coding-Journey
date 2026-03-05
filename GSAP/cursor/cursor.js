let main=document.querySelector("#main");
let cursor=document.querySelector("#cursor");
let imageDiv=document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
 gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out"
 })
})

imageDiv.addEventListener("mouseenter",function(){
   gsap.to(cursor,{
      scale:2
   })
})
imageDiv.addEventListener("mouseenter",function(){
   gsap.to(cursor,{
      scale:2
   })
})
imageDiv.addEventListener("mouseleave",function(){
   gsap.to(cursor,{
      scale:1
   })
})
