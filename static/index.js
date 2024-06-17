// ========== SCROLL TRANSITION ==========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        return;
        }
        entry.target.classList.remove('show');
    });
});

document.querySelectorAll('.hidden').forEach((el) => {
    observer.observe(el);
})

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const mainTextHeight = this.document.getElementById('wisearch').scrollHeight
    if (window.scrollY > mainTextHeight) {
        header.classList.add('header-scrolled');
    } else if (!btn.classList.contains("is-active")){
        header.classList.remove('header-scrolled');
    }
});

// ========== MENU HAMBURGUER ==========
const btn = document.getElementById("menu-mobile")

const home = document.getElementById("home_btn")

const quem_somos_btn = document.getElementById("quem_somos_btn")

const services_btn = document.getElementById("services_btn")

const droptool = document.getElementById('droptool');

btn.addEventListener('click', function(){
    droptool.classList.toggle('active');
    header.classList.add('header-scrolled');
    btn.classList.toggle('is-active');
});

quem_somos_btn.addEventListener('click', function(){
    btn.classList.toggle('is-active');
    droptool.classList.toggle('active');
});

home.addEventListener('click', function(){
    btn.classList.toggle('is-active');
    droptool.classList.toggle('active');
});

services_btn.addEventListener('click', function(){
    btn.classList.toggle('is-active');
    droptool.classList.toggle('active');
});

