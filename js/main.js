// btn-up
window.addEventListener('scroll', btnUp)

function btnUp() {
    const nav = document.getElementById('nav')
if(window.scrollY > nav.offsetHeight + 1100) {
    this.document.getElementById('up').style.display = 'block';
} else {
    document.getElementById('up').style.display = 'none';
}
}

// navbar
 const toggle = document.querySelector('.nav-toggle');
 const links = document.querySelector('nav');

 toggle.addEventListener('click', () => {
     toggle.classList.toggle('rotate');
     links.classList.toggle('active');
})


//cart-toggle
var openClose = document.getElementById("open-close");
var menuHamburguer = document.getElementById("cart-menu");

openClose.addEventListener("click", () =>{
    menuHamburguer.classList.toggle("take-off");
})

// searchbar
