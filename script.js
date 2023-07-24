var cursor = document.querySelector("#cursor");
var cursorblr = document.querySelector("#cursorblr");
document.addEventListener("mousemove",function(locate){
    cursor.style.left = locate.x+"px"
    cursor.style.top = locate.y+"px"
    cursorblr.style.left = locate.x -250 +"px"
    cursorblr.style.top = locate.y -250 +"px"
});





// syntax for gsap:
// gsap.to("tagName",{
//     properties that we want to apply
// })
gsap.to("#nav",{
    backgroundColor:"#000",
    heigth:"110px",
    duration:0.5,
    // scrolltrigger is target the specific element on page and to add js or css to it
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2,//it is use make to scroll process slow
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})