var tl = gsap.timeline();
tl.from("#nav", { y: -200, opacity: 0, duration: 1 });
tl.from("#title", { y: 200, opacity: 0, duration: 1.5 });
tl.from("#description", { y: 200, opacity: 0, duration: 1 });
tl.from("#side-text", { opacity: 0, duration: 1 });

gsap.to("#img-container", {
    scrollTrigger: {
        trigger: "#img-container",
        start: "center center",
        end: "bottom top",
        scrub: true,
        //markers: true
    },
    height: "100vh"
})