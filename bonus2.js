//2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

let kilometros = parseFloat(prompt("¿Cuantos kilometros desea recorrer en su motocicleta?"));
let velocidadPromedio = parseFloat(prompt("ingrese la velocidad promedio a la que desea ir en kilometros por hora"));
let metros = kilometros * 1000;
let vel = velocidadPromedio *1000/3600;
let tiempoEstimado = metros/vel;
let minutos = tiempoEstimado / 60;

alert(`Para hacer ${kilometros} kilometros necesita un tiempo de ${minutos} minutos para llega a destino`); 