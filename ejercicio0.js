//0) Solicitar al usuario su nombre y mostrarlo por consola. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por consola con el nombre completo (Ej: Hola Florencia Andres).

let nombre = prompt("Ingrese su nombre");
console.log(nombre);
alert(`Hola ${nombre}`)
let apellido = prompt("Ingrese su apellido");
console.log(`Hola ${nombre} ${apellido}`);