const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav ul');

if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}

const darkModeButton = document.getElementById('darkmodebutton');
const body = document.body;

if (darkModeButton) {
    darkModeButton.addEventListener('change', () => {
        if (darkModeButton.checked) {
            body.classList.add('body.dark-mode');
        } else {
            body.classList.remove('body.dark-mode');
        }
    });
}
document.querySelectorAll('a[href^m"#"]').foreach(anchor =>{
    anchor.addEventListener('click',function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundColor = 'rgba(10,10,10,0.98)':
    navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
});