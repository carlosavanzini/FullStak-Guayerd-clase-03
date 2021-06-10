//11) Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese la edad que cumple o cumplio en  2021"));
let año = 2021;
let nacimiento = año - edad;

alert(`Hola ${nombre} usted nacio en el año ${nacimiento}`)