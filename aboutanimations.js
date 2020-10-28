gsap.from("#cimg", {
    scrollTrigger: {
        trigger: "#fourth-page",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        //markers: true
    },
    y: 500,
    width: '0vw'
})

var t2 = gsap.timeline({ repeat: -1 });
t2.to(".far", { x: 20, duration: 1 });
t2.to(".far", { x: 0, duration: 1 });