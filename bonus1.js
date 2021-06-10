//1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

let años = parseFloat(prompt("ingrese cuantos años quiere pasar a segundos"))
let añosEnSegundos = años * 365 * 24 * 3600;
alert(`${años} años son ${añosEnSegundos} segundos`) 

let dias = parseFloat(prompt("ingrese la cantidad de dias que quiere pasr a segundos"));
let diasASegundo = dias * 24 * 3600;
alert(`${dias} dias son ${diasASegundo} segundos`);