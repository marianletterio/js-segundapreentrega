let carrito       = [];
let productos     = [];

let gestor;

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

})

let boton = document.getElementsByClassName("botonComprar");
    for (let i = 0; i < prendas.length;i++){
        boton[i].onclick = () => {console.log(prendas[i].tipo + " " + prendas[i].nombre + " en el carrito");
        let PrintCarrito = document.getElementsByTagName("h6");
        PrintCarrito[i].innerHTML = prendas[i].tipo + " " + prendas[i].nombre + " EN EL CARRITO";
        };

    }
    



