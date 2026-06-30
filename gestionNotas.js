const fs = require("fs");

function crearNota(titulo, contenido) {
    const nombreArchivo = `${titulo}.txt`;

    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.log("Error al crear la nota.");
            return;
        }

        console.log(`La nota "${titulo}" fue creada correctamente.`);
    });
}

function leerNotas() {
    fs.readdir(".", (err, archivos) => {
        if (err) {
            console.log("Error al leer las notas.");
            return;
        }

        const notas = archivos.filter(archivo => archivo.endsWith(".txt"));

        if (notas.length === 0) {
            console.log("No existen notas.");
            return;
        }

        console.log("Notas disponibles:");

        notas.forEach(nota => {
            console.log("- " + nota);
        });
    });
}

function eliminarNota(titulo) {
    const nombreArchivo = `${titulo}.txt`;

    if (!fs.existsSync(nombreArchivo)) {
        console.log("La nota no existe.");
        return;
    }

    fs.unlink(nombreArchivo, (err) => {
        if (err) {
            console.log("Error al eliminar la nota.");
            return;
        }

        console.log(`La nota "${titulo}" fue eliminada correctamente.`);
    });
}


crearNota("Compras", "Comprar leche, pan y huevos");

leerNotas();

