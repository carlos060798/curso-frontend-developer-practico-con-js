const email=document.querySelector(".navbar-email") 
const menu=document.querySelector(".desktop-menu")

email.addEventListener('click', mostrarmenu) 
//funcion para montrar menu desplegable
function mostrarmenu(){
    menu.classList.toggle("inactive")
}