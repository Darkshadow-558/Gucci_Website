let tl = gsap.timeline();

function loader() {
    tl.from( "#loader h1" , {
        y:"100%",
        stagger:.5,
        duration: .5
    })
    .to("#loader h1",{
        y:"-100%",
        stagger:.1,
        duration:.5
    })
    .to("#loader-div",{
        height:"0vh",
        duration:0.8
    } ,"a")
    .to("#green",{
        height:"100vh",
        duration:0.8    
    }, "a")
    .to("#main-screen",{
        height:"100vh",
        duration:0.8
    })
}
loader();
function brandName() {
    let main = document.getElementById("m-scr-nav");
    let cursor = document.getElementById("cursor");
  
    main.addEventListener("mousemove", function(dets) {
      cursor.style.left = (dets.x - 20) + "px";
      cursor.style.top = (dets.y - 20) + "px";
    });
  
    const overlays = document.querySelectorAll("[id^='overlay']");
    const elems = document.querySelectorAll("[id^='elem']");
  
    overlays.forEach((overlay, index) => {
      overlay.addEventListener("mousemove", function(dets) {
        elems[index].querySelector("img").style.scale = 1;
        elems[index].querySelector("img").style.opacity = 1;
        cursor.style.opacity = 0;
        elems[index].querySelector("img").style.left = (dets.x - (80 + index * 290)) + "px";
        elems[index].querySelector("img").style.top = (dets.y - 230) + "px";
      });
  
      overlay.addEventListener("mouseleave", function() {
        elems[index].querySelector("img").style.scale = 0;
        elems[index].querySelector("img").style.opacity = 0;
        cursor.style.opacity = 1;
      });
    });
}
brandName();




