//5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.

let medidaMetro = parseFloat(prompt("Ingrese una medida en metros."));

let medidaPies = medidaMetro * 3.28084;
let medidaCentimetro = medidaMetro * 100;
let medidaPulgadas = medidaMetro * 39.3701;

console.log(`${medidaPies} pies son ${medidaMetro} metros, ${medidaCentimetro} centimetros son ${medidaMetro} metros y ${medidaPulgadas} pulgadas son ${medidaMetro} metros`);
