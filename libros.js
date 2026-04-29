let librosLeidos = ["Principito"];
function agregarLibro() {
    let titulo = prompt("Escribe el título del libro:");
    if (titulo) {
        librosLeidos.push(titulo);
    }
}
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    librosLeidos.forEach(function(libro) {
        console.log("- " + libro);
    });
}
let agregar = prompt("¿Cuantos libros desea agragar?:");
for(let i = 0; i < agregar; i++){
    agregarLibro();

}
mostrarLibrosLeidos();
