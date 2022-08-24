class Prendas { 
    constructor(id, tipo, nombre, precio, talle, img, cantidad){
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
    this.cantidad = cantidad;
    this.img = img;
    this.cantidad = cantidad;
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