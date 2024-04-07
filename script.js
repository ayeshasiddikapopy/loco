// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


gsap.from(".page2 .box2", {
    scrollTrigger: {
      trigger: ".box2",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top 60%",
      end: "top 30%",
      markers:true
    },
    scale: 1,
    rotate:360,
    duration:1 
    // transformOrigin: "left center", 
    // ease: "none"
  });