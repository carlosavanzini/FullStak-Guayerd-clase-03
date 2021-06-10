//14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.

let numero = parseInt(prompt("ingrese un numero"));
alert("Ahora le sumaremos 5");
let resultado1 = numero + 5;
alert("Ahora multiplicamos el resultado de la suma por 10")
let resultado2= resultado1 *10;
alert("Ahora al nuevo resultado sacaremos el resto de la division por 3")
let resto = resultado2 % 3;

alert(`El resultado final es ${resto}`);