let miNumero = "19";

//console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    if(edad>=18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }
    
    let resultado = (edad>=18)?"Puede votar":"Muy joven para votar";
    console.log(resultado);
}