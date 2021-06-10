//10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

let usuario = parseFloat(prompt("ingrese el monto"));
let monto = parseFloat(prompt("ingrese el monto de descuento"));
let montoDescuento = (usuario*monto)/100;
let montoFinal = usuario - montoDescuento;

alert(`El precio final es ${montoFinal}`);