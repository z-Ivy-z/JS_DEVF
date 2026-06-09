const productos = [
    { nombre: "Leche", precio: 35, categoria: "Lácteos" },
    { nombre: "Pan", precio: 25, categoria: "Panadería" },
    { nombre: "Televisión", precio: 4500, categoria: "Electrónica" },
    { nombre: "Manzana", precio: 18, categoria: "Frutas" },
    { nombre: "Melón", precio: 45, categoria: "Frutas" }
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



const buscarInicialCoincidente = (lista) => {

    let puntero1 = 0;
    let puntero2 = 1;

    while (puntero2 < lista.length) {

        const inicial1 = lista[puntero1].nombre[0].toUpperCase();
        const inicial2 = lista[puntero2].nombre[0].toUpperCase();

        console.log(
            `Comparando ${lista[puntero1].nombre} (${inicial1}) con ${lista[puntero2].nombre} (${inicial2})`
        );

        if (inicial1 === inicial2) {
            console.log("\nCoincidencia encontrada:");
            console.log(lista[puntero1].nombre);
            console.log(lista[puntero2].nombre);

            return [lista[puntero1].nombre, lista[puntero2].nombre];
        }

        puntero1++;
        puntero2++;
    }

    console.log("\nNo se encontró ningún par con la misma inicial.");
    return null;
};

console.log("\n=== BÚSQUEDA CON PUNTEROS ===");
buscarInicialCoincidente(productos);


const encontrarPalabraMasLarga = (texto) => {

    const palabras = texto.split(" ");

    let palabraMasLarga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {

        console.log(
            `Comparando "${palabras[i]}" (${palabras[i].length}) con "${palabraMasLarga}" (${palabraMasLarga.length})`
        );

        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
};

const descripcion =
    "Leche Pan Televisión Manzana Melón Refrigerador Computadora";

console.log("\n=== PALABRA MÁS LARGA ===");

const resultado = encontrarPalabraMasLarga(descripcion);

console.log(`La palabra más larga es: ${resultado}`);


const regalos = [
    "Balón",
    "Muñeca",
    "Videojuego",
    "Bicicleta",
    "Rompecabezas",
    "Patines"
];

const buscarRegalo = (lista, regaloBuscado, indice = 0) => {

    if (indice >= lista.length) {
        return `"${regaloBuscado}" no está en la lista de regalos.`;
    }

    if (lista[indice] === regaloBuscado) {
        return `"${regaloBuscado}" se encontró en la posición ${indice}.`;
    }

    return buscarRegalo(lista, regaloBuscado, indice + 1);
};

console.log("\n=== BÚSQUEDA RECURSIVA ===");

console.log(buscarRegalo(regalos, "Bicicleta"));
console.log(buscarRegalo(regalos, "Patines"));
console.log(buscarRegalo(regalos, "Tablet"));