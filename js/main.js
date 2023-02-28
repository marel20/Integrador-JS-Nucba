//productos
const productss = document.querySelector('.products');
//productos carrito
const cartProduct = document.querySelector('.cart-product');
//total carrito
const totalCart = document.querySelector('.cart-total');
//ofertas
const offers = document.querySelector('.offers-products');
//categorias
const category = document.querySelector('.filter');
//filtro categorias
const filterCategory = document.querySelector('.btn-filter');
//boton ver mas
const load = document.querySelector('.btn-load');
//boton comprar
const buyCart = document.querySelector('.btn-buy-cart');
//carrito
const cartMenu = document.querySelector(".container-cart");
//modal de agregado al carrito.
const successModal = document.querySelector(".add-product");
//modal de eliminado del carrito.
const deleteBtn = document.querySelector(".btn-delete-product");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const saveLocal = (cartList) => {
//   localStorage.getItem("cart", JSON.stringify(cartList));
// }

// const showProduct = (product) => {
//   const {id, name, price, img} = product;
//   return `
//   <!-- <div class="card-product">
//   <div class="card-img">
//     <img src="${img}" alt="oferta5" />
//   </div>
//   <div class="card-tittle">
//     <h2>${name}</h2>
//   </div>
//   <div class="card-bid">
//     <h3>$${price}</h3>

//     <button class="btn-add-card"
//     data-id="${id}"
//     data-name="${name}"
//     data-price="${price}"
//     data-img="${img}"
//     >
//       <i class="fas fa-cart-plus"></i>
//     </button>
//   </div>
// </div>
//   `
// }

// const showProductsDivided = (index = 0) => {
//   productss.innerHTML += controller.productsdivided[index].map(showProduct).join("");
// }

// const showProductsFilter = (filterCategory) => {
//   const listProduct = products.filter((product) => {
//     return product.filterCategory === filterCategory
//   }) 
//   product.innerHTML = listProduct.map(showProduct).join("");
// }

// const showProducts = (index = 0, categories = undefined) => {
//   if (!categories) {
//     showProductsDivided(index);
//     return;
//   }
//   showProductsFilter(categories)
// }



// const init = () => {
//   showProducts();
// }

// init();
