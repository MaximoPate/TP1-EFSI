//Ejercicio 2
const texto = "Hola mundo";
function contarLetra(texto){
    texto = texto.replaceAll(" ", "");
    return texto.length;
}
console.log(contarLetra(texto));

//Ejercicio 4

function validarPassword(password){
    
    if (password.length < 8) return false;
    for (let i = 0; i < password.length; i++) {
        const num = password[i];
        if (num >= '0' && num <= '9') 
            return true;
    }
    return false;
}
console.log(validarPassword("Hola2345"));
//Ejercicio 6
const numeros = [1, 2, 20, 4, 5];
function mayorNumero(numeros){
    numeros = numeros.sort((a, b) => b - a);
    return numeros[0];
}
console.log(mayorNumero(numeros));


//Ejercicio 10

const productos3 = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

];
function precioTotal(productos3){
    precioTotal = productos3.reduce((total, producto3) => total + producto3.precio, 0);
    return precioTotal;
}
console.log(precioTotal(productos3));

//Ejercicio 12

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]
console.log(usuarios.filter(e => e.edad >= 18).map(e => e.nombre));

//Ejercicio 14

const producto = {

nombre:"Notebook",

precio:1000

}
const { nombre: nombreProducto, precio: precioProducto } = producto;
console.log(nombreProducto, precioProducto);

//Ejercicio 16

function buscarProducto(productos, nombre) {
    return productos.find(producto => producto.nombre === nombre);
}
console.log(buscarProducto(productos3, "Teclado"));

//Ejercicio 18
const numeros2 = [10,8,6,9];
function promedio(numeros) {
    promedio = numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
    return promedio;

}
console.log(promedio(numeros2));





