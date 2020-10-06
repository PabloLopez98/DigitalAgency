let thehamburgericon = document.getElementById('hamburgericon')
let thenav = document.getElementById('nav')
thehamburgericon.addEventListener('click', () => {
    if (thenav.style.color === 'pink') {
        var t1 = gsap.timeline()
        t1.to("#right", { opacity: 0, duration: .5 });
        t1.to("#left", { opacity: 0, duration: .5 });
        t1.to("#left", { visibility: 'visible', duration: 0 });
        t1.to("#right", { visibility: 'visible', duration: .1 });
        t1.to("#menu", { width: '50vh', duration: .3 });
        t1.to("#menu", { height: '0vw', duration: .3 });
        thenav.style.color = 'white'
        thehamburgericon.className = 'fas fa-grip-lines'
    } else {
        var t2 = gsap.timeline()
        t2.to("#menu", { height: '100vh', duration: .3 });
        t2.to("#menu", { width: '100vw', duration: .3 });
        t2.to("#left", { visibility: 'visible', duration: 0 });
        t2.to("#right", { visibility: 'visible', duration: .1 });
        t2.to("#left", { opacity: 1, duration: .5 });
        t2.to("#right", { opacity: 1, duration: .5 });
        thenav.style.color = 'pink'
        thehamburgericon.className = 'fas fa-times'
    }
})