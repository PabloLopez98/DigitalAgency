let thehamburgericon = document.getElementById('hamburgericon')
let thenav = document.getElementById('nav')
thehamburgericon.addEventListener('click', () => {
    if (thenav.style.color === 'pink') {
        var t1 = gsap.timeline()
        t1.to("#left", { width: '0vw', duration: .3 });
        t1.to("#right", { width: '0vw', duration: .3 });
        t1.to("#left", { height: '0vh', duration: .3 });
        t1.to("#right", { height: '0vh', duration: .3 });
        t1.to("#menu", { height: '0vh', duration: .3 });
        t1.to("#menu", { width: '50vw', duration: .3 });
        thenav.style.color = 'white'
        thehamburgericon.className = 'fas fa-grip-lines'
    } else {
        var t2 = gsap.timeline()
        t2.to("#menu", { height: '100vh', duration: .3 });
        t2.to("#menu", { width: '100vw', duration: .3 });
        t2.to("#left", { height: '100vh', duration: .3 });
        t2.to("#right", { height: '100vh', duration: .3 });
        t2.to("#left", { width: '50vw', duration: .3 });
        t2.to("#right", { width: '50vw', duration: .3 });
        thenav.style.color = 'pink'
        thehamburgericon.className = 'fas fa-times'
    }
})