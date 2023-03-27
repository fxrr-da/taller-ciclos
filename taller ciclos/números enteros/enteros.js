
const num1 = parseInt(prompt("Ingrese el primer número entero positivo: "));
const num2 = parseInt(prompt("Ingrese el segundo número entero positivo: "));
let sum = 0;
for (let i = num1; i <= num2; i++) {
  sum += i;
}
console.log(`La suma total de los enteros desde ${num1} hasta ${num2} es: ${sum}`);
