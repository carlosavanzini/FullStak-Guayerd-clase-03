//3) Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

let balanceActual = 500;
alert(`Su saldo es de ${balanceActual} dolares`);

let dineroRetiro = prompt("¿Cuanto dinero desea retirar?");

saldoFinal = balanceActual - dineroRetiro;

alert(`El nuevo saldo de su cuenta es de ${saldoFinal}`);
