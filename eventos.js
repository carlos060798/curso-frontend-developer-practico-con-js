//VARIABLES 

const email=document.querySelector(".navbar-email") 
const menu=document.querySelector(".desktop-menu")
const menuicon=document.querySelector(".menu")
const menuobile=document.querySelector(".mobile-menu") 
const  carrito=document.querySelector(".carrito")
const  detalleventa=document.querySelector(".product-detail")
const   cardscontainer= document.querySelector(".cards-container");

//EVENTOS DE CLICK DEL MENU

email.addEventListener('click', mostrarmenu) 
menuicon.addEventListener('click', menumobile) 
carrito.addEventListener('click', detalleventas)


//FUNCIONES  de los menus

//funcion para montrar menu desplegable
function mostrarmenu(){
    const  menuMOBILE= detalleventa.classList.contains("inactive")
   
    if (!menuMOBILE){
        detalleventa.classList.add("inactive")  
    }
    menu.classList.toggle("inactive")
} 

//funcion  de menu mobile
function menumobile(){
// esta parte de la funcion hace lo contrario de la de detalleventas()
    const  menuMOBILE= detalleventa.classList.contains("inactive")
   
    if (!menuMOBILE){
        detalleventa.classList.add("inactive")  
    }
// esta fraccion de la funcion esconde el menu cuando se le da click

    menuobile.classList.toggle("inactive")
} 


//funcion de mostrar carrito de compras
function detalleventas(){
// variables para determianr cuando abrir y cerrrar  los menus en mobile
    const  menucerrado=menuobile.classList.contains("inactive")
    //aesta parte de la funcion cieera el menu mobile para que se muestre el de detalle de comrpa
    if (!menucerrado){
        menuobile.classList.add("inactive");
    }



// esta fraccion de la funcion esconde el menu cuando se le da click
    detalleventa.classList.toggle("inactive")  
 
}  


// FUNCIONES DE LISTAR LOS PRODUCTOS


const productoslist=[]; 

productoslist.push({
name:'bike',
price:120,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}) 

productoslist.push({
    name:'patin',
    price:100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    })

    productoslist.push({
        name:'moto',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        
        })


function renderizar(arr){
// ciclo for que hace una iteracion por cada uno de los productos//
for(product of arr){
// estas lineas crean la estructutura del documento html
   const productCard= document.createElement('div');
   productCard.classList.add('product-card') 


 // product= {name, price, image} -> product.image
   const imgproducto= document.createElement('img');
   imgproducto.setAttribute('src', product.image) 

   const productinfo = document.createElement('div');
   productinfo.classList.add('product-info') 

   const productdiv = document.createElement('div');
  

   const productprice = document.createElement('p');
   productprice.innerText = '$' + product.price;

   const productname = document.createElement('p');
   productname.innerText = product.name;

   //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado
   productdiv.appendChild(productprice)
   productdiv.appendChild(productname)


   const productinfofigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
   
   productinfofigure.appendChild(productImgCart);

   //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado


   productinfo.appendChild(productdiv);
   productinfo.appendChild( productinfofigure);
   //esta linea permite  anexar  los elementos html en  la estructura del conteendor indicado

   productCard.appendChild(imgproducto);
   productCard.appendChild(productinfo);
   
   // esta linea idecta todo el codigo d ela estrutura html en el div contenedor
   cardscontainer.appendChild(productCard);
}
}

renderizar(productoslist);
