//9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área.
let base = parseFloat(prompt("Ingrese la base del tringulo equilatero"));
let altura = parseFloat(prompt("Ingrese la altura del tringulo equilatero"));

let area = (base*altura)/2;

alert(`El area de un triangulo equilatero es igual a ${area}`);