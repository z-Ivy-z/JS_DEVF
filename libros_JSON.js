// GESTIÓN DE BIBLIOTECA


// Base de datos (JSON)
let biblioteca = {
    libros: [
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Novela",
            disponible: true
        },
        {
            titulo: "Don Quijote de la Mancha",
            autor: "Miguel de Cervantes",
            genero: "Novela",
            disponible: false
        },
        {
            titulo: "El Principito",
            autor: "Antoine de Saint-Exupéry",
            genero: "Infantil",
            disponible: true
        }
    ]
};

// SIMULAR LECTURA DEL JSON

function leerBiblioteca(callback) {

    console.log("Leyendo biblioteca...");

    setTimeout(() => {

        callback(biblioteca);

    }, 1000);

}

// SIMULAR ESCRITURA DEL JSON

function guardarBiblioteca(callback) {

    console.log("Guardando cambios...");

    setTimeout(() => {

        callback();

    }, 1000);

}

// CONSULTAR LIBROS

function mostrarLibros() {

    leerBiblioteca((datos) => {

        console.log("\n===== INVENTARIO =====\n");

        datos.libros.forEach((libro, index) => {

            console.log(`Libro ${index + 1}`);

            console.log("Título: ", libro.titulo);
            console.log("Autor: ", libro.autor);
            console.log("Género:", libro.genero);

            console.log(
                "Disponible:",
                libro.disponible ? "Sí" : "Prestado"
            );

            console.log("-----------------------");

        });

    });

}

// AGREGAR LIBRO

function agregarLibro(titulo, autor, genero) {

    const nuevoLibro = {

        titulo,
        autor,
        genero,
        disponible: true

    };

    biblioteca.libros.push(nuevoLibro);

    guardarBiblioteca(() => {

        console.log("\nLibro agregado correctamente.\n");

    });

}

// ACTUALIZAR DISPONIBILIDAD

function actualizarDisponibilidad(titulo, disponible) {

    const libro = biblioteca.libros.find(
        l => l.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (!libro) {

        console.log("Libro no encontrado.");

        return;

    }

    libro.disponible = disponible;

    guardarBiblioteca(() => {

        console.log("\nDisponibilidad actualizada.\n");

    });

}

// PRUEBAS

// Mostrar libros
mostrarLibros();

// Agregar libro
setTimeout(() => {

    agregarLibro(
        "Clean Code",
        "Robert C. Martin",
        "Programación"
    );

}, 2500);

// Cambiar disponibilidad
setTimeout(() => {

    actualizarDisponibilidad(
        "El Principito",
        false
    );

}, 5000);

// Mostrar nuevamente
setTimeout(() => {

    mostrarLibros();

}, 7500);