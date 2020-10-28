/*all pages(600vw) cannot fit inside the (100vw) window,
so we need ScrollTrigger to scroll the pages through the 100vw window*/
gsap.registerPlugin(ScrollTrigger)
let container = document.getElementById("scroll-wrapper");
gsap.to(
    container,
    {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "slow",
        scrollTrigger: {
            //ease: "slow",
            trigger: container,
            pin: true,
            //how many seconds to keep scrolling once the mouse is unclicked
            scrub: 0.7,
            end: () => "+=" + container.offsetWidth,
        }
    }
)