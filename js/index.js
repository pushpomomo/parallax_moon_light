

let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    
    bg.style.top = -0.1 * scrollY + 'px';
    moon.style.left = 1.1 * scrollY + 'px';
    mountain.style.top = (0.5 +0.10 * scrollY) + 'px'; 
    road.style.top = 0.5 * scrollY + 'px';
    text.style.top = (0 + 1.5 * scrollY) + 'px';
});

