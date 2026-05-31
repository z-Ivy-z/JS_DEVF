let destinos = [];

function registrarDestino(destino, fecha, transporte) {

    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

function calcularCosto(destino, transporte) {
    let costoBase = 0;

    switch (destino.toLowerCase()) {
        case 'paris':
            costoBase = 1000;
            break;
        case 'londres':
            costoBase = 800;
            break;
        case 'nueva york':
            costoBase = 1200;
            break;
        default:
            costoBase = 500;
    }

    let transporteNormalizado = transporte
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let multiplicador = 1;

    switch (transporteNormalizado) {
        case 'avion':
            multiplicador = 1.5;
            break;
        case 'auto':
            multiplicador = 1.2;
            break;
        case 'tren':
            multiplicador = 1.0;
            break;
    }

    return costoBase * multiplicador;
}

function mostrarItinerario() {
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log(viaje);
}
}

function iniciarApp() {
    registrarDestino("Paris", "2024-06-15", "avion");
    registrarDestino("londres", "2024-07-01", "Tren");
    registrarDestino("Nueva York", "2024-08-20", "Auto");

    mostrarItinerario();
}

iniciarApp();