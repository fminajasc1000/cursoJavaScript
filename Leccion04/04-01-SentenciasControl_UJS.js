let numero = 2;

if( numero == 1){
    console.log( "NUmero uno");
}else if(numero == 2){
    console.log("NUmero dos");
}else if(numero  == 3){
    console.log("NUmero tres");
}else if(numero == 4){
    console.log("Numero cuatro");
}else{
    console.log("Numero desconocido");
}

//------------
let mes = 12;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion == "Verano";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion == "Otoño";
}else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

//-----
let hora = 19;
let estado;

if( hora >= 6 && hora <= 11){
    estado = "Buenos dias";
}else if(hora >= 12 && hora <= 18){
    estado = "Buenas tardes";
}else if(hora >= 19 && hora <= 24){
    estado == "Buenas noches";
}else if(hora >= 0 && hora <= 6){
    estado == "Durmiendo";
}else{
    estado = "Valor incorrecto";
}

console.log(estado);