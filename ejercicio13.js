//13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.
let nombre = prompt("Ingrese su nombre");
let temperatura = parseFloat(prompt("Ingrese la temperatura en grados farenheit que quiere saber en grados celsius"));
let temperaFa = (temperatura -32) * 5/9

alert(`Los ${temperatura} grados farenheit equivales a ${temperaFa} grados celsius`);