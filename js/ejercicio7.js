//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if (numero1 >= numero2 && numero1 >= numero3) {
  document.write("el mayor es " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  document.write("el mayor es " + numero2);
} else {
  document.write("el mayor es " + numero3);
}
