//Ejercicio 1

const formatearNombre = nombre => {
	const minuscula = nombre.toLowerCase();
	return minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
};
// Ejemplo
console.log(formatearNombre("JUaN"));
console.log(formatearNombre("mARIA")); 


//Ejercicio 2
const texto = "Hola mundo";
function contarLetra(texto){
    texto = texto.replaceAll(" ", "");
    return texto.length;
}
console.log(contarLetra(texto));


//Ejercicio 3

const maximo = (a, b, c) => {
	let mayor = a;
	if (b > mayor) mayor = b;
	if (c > mayor) mayor = c;
	return mayor;
};
// Ejemplo
console.log(maximo(-10, 5, 7)); 


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


//Ejercicio 5

const sumarArray = numeros => {
	let suma = 0;
	numeros.forEach(element => suma += element);
	return suma;
};
// Ejemplo
console.log(sumarArray([3, 5, 10]));


//Ejercicio 6
const numeros = [1, 2, 20, 4, 5];
function mayorNumero(numeros){
    numeros = numeros.sort((a, b) => b - a);
    return numeros[0];
}
console.log(mayorNumero(numeros));


//Ejercicio 7

const obtenerPares = numeros => {
	const pares = [];
    numeros.forEach(element => {
        if (element % 2 === 0) {
            pares.push(element);
        }
    });
	return pares;
};
// Ejemplos
console.log(obtenerPares([1,2,3,4,5,6])); // -> [2,4,6]


//Ejercicio 8

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

const descripcionUsuario = usuario => console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
// Ejemplo
descripcionUsuario(usuario);


//Ejercicio 9

const activarUsuario = usuario => {
    usuario.activo = true;
    return usuario;
};
// Ejemplo
console.log(activarUsuario(usuario));


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


//Ejercicio 11

const usuarios = [
{id:1, nombre:"Ana", edad:17},
{id:2, nombre:"Juan", edad:25},
{id:3, nombre:"Pedro", edad:30}
]

const nombres = [];
usuarios.forEach(element => nombres.push(element.nombre));
// Ejemplo
console.log(nombres);


//Ejercicio 12

console.log(usuarios.filter(e => e.edad >= 18).map(e => e.nombre));


//Ejercicio 13

const sumaEdades = usuarios.reduce((acc, user) => acc + user.edad, 0);
//Ejemplo
console.log(sumaEdades);


//Ejercicio 14

const producto = {
nombre:"Notebook",
precio:1000
}
const { nombre: nombreProducto, precio: precioProducto } = producto;
console.log(nombreProducto, precioProducto);


//Ejercicio 15

const copiaProducto = { ...producto, stock: 5 };
console.log(copiaProducto);


//Ejercicio 16

function buscarProducto(productos, nombre) {
    return productos.find(producto => producto.nombre === nombre);
}
console.log(buscarProducto(productos3, "Teclado"));


//Ejercicio 17  

const productosMayor50 = productosMayores => productosMayores.filter(p => p.precio > 50);
// Ejemplo
console.log(productosMayor50(productos3)); 


//Ejercicio 18
const numeros2 = [10,8,6,9];
function promedio(numeros) {
    promedio = numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
    return promedio;

}
console.log(promedio(numeros2));


//DESAFIO FINAL

//1

const getUsuarios = () => usuarios;
console.log(getUsuarios());

//2

const obtenerUsuarioPorId = id => {
    usuarios.forEach(usuario => {
        if (usuario.id === id) {
            console.log(usuario);
        }
});
}

//3

const obtenerMayores = usuarios => usuarios.filter(usuario => usuario.edad > 18);
console.log(obtenerMayores(usuarios));

//4

const crearUsuario = (nombre, edad) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        edad: edad
    };
    usuarios.push(nuevoUsuario);
};

crearUsuario("Lucia", 22);
console.log(usuarios);
