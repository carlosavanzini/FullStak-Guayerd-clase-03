//2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por consola (Ej: Usted nació en 1974)

let edad =parseInt(prompt("Ingrese la edad que cumple o cumplio"));
let anoPresente = parseInt(prompt("Ingrese el año actual"));

anoNacimiento = anoPresente - edad;
console.log(`Usted nacio en el año ${anoNacimiento}`);