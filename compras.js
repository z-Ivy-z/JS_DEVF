const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`${producto} agregado a la lista.`);
    } else {
        console.log(`${producto} ya existe en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`${producto} eliminado de la lista.`);
    } else {
        console.log(`${producto} no se encuentra en la lista.`);
    }
};

const mostrarLista = () => {
    console.log("Lista de compras:");

    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
        return;
    }

    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto}`);
    });
};

agregarProducto("Donas");
agregarProducto("Manzanas");
agregarProducto("Jugos");
agregarProducto("Jugos"); 

mostrarLista();

eliminarProducto("Donas");

mostrarLista();