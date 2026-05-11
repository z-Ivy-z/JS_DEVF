
let calificacion=Number(prompt("Ingresa la calificacion del alumno (0-100))"))
if (calificacion<0 || calificacion>100){
    console.log("Calificacion invalida")
}
else if(calificacion>=90){
    console.log("El estudiante aprueba con EXCELENCIA")
}
else if(calificacion >= 75 && calificacion <= 89){
    console.log("El estudiante aprueba con BIEN")
}
else if(calificacion >= 60 && calificacion <= 74){
    console.log("El estudiante aprueba con SUFICIENTE")
}
else {
    console.log("El estudiante NO aprueba")
}