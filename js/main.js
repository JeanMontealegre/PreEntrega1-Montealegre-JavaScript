// Stock máximo de cada categoría
const stockMaximoA = 1000;
const stockMaximoB = 600;
const stockMaximoC = 300;

// Stock mínimo para decidir si es necesario reponer en relación al stock máximo
const porcentajeA = 0.6;
const porcentajeB = 0.4;
const porcentajeC = 0.25;

// Ingreso de stock para cada categoría
let stockIngresadoA = prompt("Ingrese el stock actual para la categoría A");
let stockIngresadoB = prompt("Ingrese el stock actual para la categoría B");
let stockIngresadoC = prompt("Ingrese el stock actual para la categoría C");

// Conversión de los valores ingresados a números
stockIngresadoA = parseInt(stockIngresadoA);
stockIngresadoB = parseInt(stockIngresadoB);
stockIngresadoC = parseInt(stockIngresadoC);

// Comprobar si es necesario reponer stock para cada categoría y mostrar mensaje correspondiente
if (stockIngresadoA <= porcentajeA * stockMaximoA) {
    const cantidadReponerA = stockMaximoA - stockIngresadoA;
    console.log("Es necesario comprar " + cantidadReponerA + " unidades de la categoría A.");
} 
else {
    alert("No es necesario comprar stock para la categoría A.");
}

if (stockIngresadoB <= porcentajeB * stockMaximoB) {
    const cantidadReponerB = stockMaximoB - stockIngresadoB;
    console.log("Es necesario comprar " + cantidadReponerB + " unidades de la categoría B.");
} 
else {
    alert("No es necesario comprar stock para la categoría B.");
}

if (stockIngresadoC <= porcentajeC * stockMaximoC) {
    const cantidadReponerC = stockMaximoC - stockIngresadoC;
    console.log("Es necesario comprar " + cantidadReponerC + " unidades de la categoría C.");
} 
else {
    alert("No es necesario comprar stock para la categoría C.");
}
