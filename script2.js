function elegirPrenda(){
    if(prenda == "1"){
        alert("Compraste el Buzo Eyes!");
        let precioBuzoEyes = document.getElementById("precioBuzoEyes");
        precioBuzoEyes.innerHTML='EN EL CARRITO';
    }else if(prenda == "2"){
        alert("Compraste la Campera Dogs!");
        let precioCamperaDogs = document.getElementById("precioCamperaDogs");
        precioCamperaDogs.innerHTML='EN EL CARRITO';
    }else if(prenda == "3"){
        alert("Compraste la Remera Jungle!");
        let precioRemeraJungle = document.getElementById("precioRemeraJungle");
        precioRemeraJungle.innerHTML='EN EL CARRITO';
    }else if(prenda == "4"){
        alert("Compraste la Camisa Daisy!");
        let precioCamisaDaisy = document.getElementById("precioCamisaDaisy");
        precioCamisaDaisy.innerHTML='EN EL CARRITO';
    }else if(prenda == "5"){
        alert("Compraste el Sweater Lazy!");
        let precioSweaterLazy = document.getElementById("precioSweaterLazy");
        precioSweaterLazy.innerHTML='EN EL CARRITO';
    }else if(prenda == "6"){
        alert("Compraste la Camisa Patchwork!");
        let precioCamisaPatchwork = document.getElementById("precioCamisaPatchwork");
        precioCamisaPatchwork.innerHTML='EN EL CARRITO';
    }
}

function mostrarPrendas(){
    let stock = "";
    for(let i = 0; i < prendas.length 
        ;i++){
        stock += "\n"+prendas[i].mostrarTodo();
    }
    return stock ; 
    } 
    
    function mostrarSoloPrecios(){
        let precios = "";
        for (let i = 0; i <prendas.length;i++){
            precios += "\n"+prendas[i].mostrarPrecios();
        }
    return precios;
    }
    
    function mostrarTalles(){
        let talle = "";
        for (let i = 0; i < prendas.length;i++){
            talle += "\n" + prendas[i].mostrarTalles();
        }
        return talle;
    }
    

const prendas = [];
prendas.push(new Prendas (1, "Buzo", "Eyes", 6900, "S - M - L -XL"));
prendas.push(new Prendas (2, "Campera", "Dogs", 14900, "S - M - L -XL"));
prendas.push(new Prendas(3, "Remera", "Jungle", 3900 , "S - M - L - XL" ));
prendas.push(new Prendas(4, "Camisa", "Daisy", 800 , "S - M - L - XL" ));
prendas.push(new Prendas (5, "Sweater", "Lazy", 12900 , "S - M - L - XL" ));
prendas.push(new Prendas(6, "Camisa", "Patchwork", 10900 , "S - M - L - XL" ));

const buscarCampera = (camperaDogs) => {
    return camperaDogs.nombre === "Campera Dogs";
}

console.log(prendas.find(buscarCampera));