function encontrarMaximo(arreglo, inicio, fin) {
    if (inicio === fin) {
        return arreglo[inicio];
    }

    const medio = Math.floor((inicio + fin) / 2);

    const maxIzquierda = encontrarMaximo(arreglo, inicio, medio);
    const maxDerecha = encontrarMaximo(arreglo, medio + 1, fin);

    return Math.max(maxIzquierda, maxDerecha);
}

const numeros = [12, 45, 7, 100, 89, 34, 99, 23, 56];

const resultado = encontrarMaximo(numeros, 0, numeros.length - 1);

console.log("El número máximo es:", resultado);