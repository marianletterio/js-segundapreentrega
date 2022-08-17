class Prendas { 
    constructor(id, tipo, nombre, precio, talle){
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
}

    mostrarTodo(){
        return this.nombre + " $ "+ this.precio ; 
    }
    mostrarPrecios(){
        return "$" + this.precio;
    }
    mostrarTalles(){
        return this.nombre + ": " + this.talle;
    }
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