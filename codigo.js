//Ejercicio 1

const formatearNombre = nombre => {
	const minuscula = nombre.toLowerCase();
	return minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
};
// Ejemplo
console.log(formatearNombre("JUaN"));
console.log(formatearNombre("mARIA")); 


//Ejercicio 3

const maximo = (a, b, c) => {
	let mayor = a;
	if (b > mayor) mayor = b;
	if (c > mayor) mayor = c;
	return mayor;
};
// Ejemplo
console.log(maximo(-10, 5, 7)); 


//Ejercicio 5

const sumarArray = numeros => {
	let suma = 0;
	numeros.forEach(element => suma += element);
	return suma;
};
// Ejemplo
console.log(sumarArray([3, 5, 10]));


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


//Ejercicio 13

const sumaEdades = usuarios.reduce((acc, user) => acc + user.edad, 0);
//Ejemplo
console.log(sumaEdades);


//Ejercicio 14

const producto = {
nombre:"Notebook",
precio:1000
}


//Ejercicio 15

const copiaProducto = { ...producto, stock: 5 };
console.log(copiaProducto);


//Ejercicio 17  

// FIJARSE ACA QUE TENGO QUE CAMBIAR EL NOMBRE DEL ARRAY POR EL QUE LE PONGA MELMAN

const productosMayor50 = productosMayores => productosMayores.filter(p => p.precio > 50);
//// Ejemplo
//console.log(productosMayor50(productos)); 


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