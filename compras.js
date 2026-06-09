const productos = [
    { nombre: "Leche", precio: 35, categoria: "Lácteos" },
    { nombre: "Pan", precio: 25, categoria: "Panadería" },
    { nombre: "Televisión", precio: 4500, categoria: "Electrónica" },
    { nombre: "Manzana", precio: 18, categoria: "Frutas" },
    { nombre: "Cuaderno", precio: 80, categoria: "Papelería" }
];

console.log("Productos originales:");
console.log(productos);

const productosBaratos = productos.filter(
    producto => producto.precio < 100
);

console.log("\nProductos menores a $100:");
console.log(productosBaratos);


const productosOrdenados = [...productosBaratos].sort(
    (a, b) => a.nombre.localeCompare(b.nombre)
);

console.log("\nProductos ordenados alfabéticamente:");
console.log(productosOrdenados);


const nombresProductos = productosOrdenados.map(
    producto => producto.nombre
);

console.log("\nNombres de los productos:");
console.log(nombresProductos);


const totalInventario = productos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
);

console.log("\nValor total del inventario:");
console.log(`$${totalInventario}`);


const existeProductoCaro = productos.some(
    producto => producto.precio > 1000
);

console.log("\n¿Existe algún producto mayor a $1000?");
console.log(existeProductoCaro);


const preciosValidos = productos.every(
    producto => producto.precio > 0
);

console.log("\n¿Todos los productos tienen precio válido?");
console.log(preciosValidos);