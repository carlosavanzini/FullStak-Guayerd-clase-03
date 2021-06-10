//6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el primer numero"));
let resultado = numero2 + numero1;
alert(`El resultado de la suma es igual a ${resultado}` );
let numero3 = parseFloat(prompt("Ingrese un tercer numero que sera multiplado por el resultado de la suma"));
 let resultadoM = numero3 * resultado;
 alert(`El resultado de la suma por el tercer numero ingresado es igual a ${resultadoM}`);