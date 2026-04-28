let frutas = ["guanabana", "uva", "pera", "manzana", "naranja", "pera", "manzana"];

let conteo = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }
}

console.log(conteo);