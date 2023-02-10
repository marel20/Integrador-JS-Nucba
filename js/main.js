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

// filter

const btnFilter    = document.querySelectorAll('.btn-filter')
    
btnFilter.forEach( ( cadaBtnFilter , i )=>{
    btnFilter[i].addEventListener('click', ()=>{
        
        btnFilter.forEach( ( cadaBtnFilter , i )=>{
            btnFilter[i].classList.remove('filter-active')
        })

        btnFilter[i].classList.add('filter-active')

    })
})

//searchBar

const search = document.querySelector('#searchBar');
const btnSearch = document.querySelector('#btnSearch');
const resultSearch = document.querySelector('#products')

const filterSearch = () => {
    console.log(search.value);
    resultSearch.innerHTML = '';

    const textoSearch = search.value.toLowerCase();

    for(let producto of products){
        let nombre = producto.name.toLowerCase();
        if(nombre.indexOf(textoSearch !== -1)){
            resultSearch.innerHTML += `<div class="card-product">
            <div class="card-img">
              <img src="${producto.img}" />
            </div>
            <div class="card-tittle">
              <h2>${producto.name}</h2>
            </div>
            <div class="card-bid">
              <h3>$${producto.price}</h3>

              <button class="btn-add-card">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>`
        }
    }

    if(resultSearch.innerHTML === ''){
        resultSearch.innerHTML += `<div>
        <h3>Producto no encontrado..</h3>
      </div>`
    }
}

btnSearch.addEventListener('click', filterSearch);
search.addEventListener('keyup', filterSearch);

filterSearch();
