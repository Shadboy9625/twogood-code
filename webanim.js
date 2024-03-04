const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation(){
    let videocon=document.querySelector("#video-container")
    let playbtn=document.querySelector("#play");
    
    videocon.addEventListener("mouseenter",function(){
     gsap.to(playbtn,{
         scale:1,
         opacity:1,
     })
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0,
        })
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-50,
            top:dets.y-80,
        })
    })
}
videoconAnimation();

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:80,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.4,
    })
    gsap.from("#page1 #video-container",{
        y:50,
        opacity:0,
        delay:1.3,
        duration:1,
        
    })
}
loadinganimation(); 

document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gasp.to("#cursor",{transform:'translate(-50%,-50%) scale(1)'});
})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gasp.to("#cursor",{transform:'translate(-50%,-50%) scale(0)'});
})

