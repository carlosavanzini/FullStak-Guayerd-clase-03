//12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

let nombre = prompt("Ingrese su nombre");
let temperatura = parseFloat(prompt("Ingrese la temperatura en grados celsius que quiere saber en grados Farenheit"));
let temperaFa = (temperatura * 9/5) + 32;

alert(`Los ${temperatura} grados celsius equivales a ${temperaFa} grados farenheit`);