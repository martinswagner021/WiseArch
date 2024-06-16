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
    } else {
        header.classList.remove('header-scrolled');
    }
});

const btn = document.getElementById("menu-mobile")

btn.addEventListener('click', function(){
    const droptool = document.getElementById('droptool');
    droptool.classList.toggle('active');

    btn.classList.toggle('is-active');
});

