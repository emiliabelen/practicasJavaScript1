//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

if (numero1 > numero2) {
  document.write("el mayor es " + numero1);
}

else { document.write("el mayor es " + numero2);

}