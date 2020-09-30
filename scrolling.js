gsap.registerPlugin(ScrollTrigger)
let container = document.getElementById("scroll-wrapper");
gsap.to(
    container,
    {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.offsetWidth
        }
    }
)