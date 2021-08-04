//ejemplo de and, regresa true si ambos son verdaderos
let a = 5;
let valMin = 0;
let valMax = 10;

if( a>=valMin && a<=valMax){
    console.log("Dentro de rango");
}else{
    console.log("Fuera de rango");
}

//ejemplo de or, regresa true si cualquiera de los operandos es true
let vacaciones = false, diaDescanso = true;
if(vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}else{
    console.log("Padre ocupado");
}
