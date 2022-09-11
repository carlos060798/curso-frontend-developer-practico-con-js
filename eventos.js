//VARIABLES 
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const detalleproducto= document.querySelector('#productDetail') 
const detalleproductoclose= document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container');


//EVENTOS DE CLICK DEL MENU
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
detalleproductoclose.addEventListener('click', closedetalleproducto);


//FUNCIONES  de los menus


//funcion para montrar menu desplegable

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}
//funcion  de menu mobile

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
// esta parte de la funcion hace lo contrario de la de toggleCarritoAside

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closedetalleproducto()
// esta fraccion de la funcion esconde el menu cuando se le da click

  mobileMenu.classList.toggle('inactive');
}

// funcion  para mostrar carrito de compras
function toggleCarritoAside() {
// variables para determianr cuando abrir y cerrrar  los menus en mobile

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //aesta parte de la funcion cieera el menu mobile para que se muestre el de toggleCarritoAside

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

//- esta parte de la funcion cieerra el detalle del producto si se abre el carrito de compras
  const isclosedetalle= detalleproducto.classList.contains('inactive');


  if (!isclosedetalle) {
    detalleproducto.classList.add('inactive'); 
  }
  
// esta fraccion de la funcion esconde el menu cuando se le da click
shoppingCartContainer.classList.toggle('inactive');
}



// funcion para abrir el detalle del producto

//-FUNCION DE ABRIR
function opendetalleproducto(){
  shoppingCartContainer.classList.add('inactive');

  detalleproducto.classList.remove('inactive')
}
//-FUNCION DE CERRAR ----------
function closedetalleproducto(){
  detalleproducto.classList.add('inactive')

}



//funciones de listar productos
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
// ciclo for que hace una iteracion por cada uno de los productos//

  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
 // estas lineas crean la estructutura del documento html product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
  //--- esta parte de la funcion permite abrir la descrision del detalle producto haciendo clip en la  imagen principal
    productImg.addEventListener( 'click', opendetalleproducto);
  


  //----------------------------------------------------
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
     //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
   //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
   //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);



