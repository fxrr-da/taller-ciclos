var num= parseInt(prompt("Digite número positivo"))
var primo = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log(num + " es primo.");
} else {
  console.log(num + " no es primo.");
}