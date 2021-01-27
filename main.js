/// ******* Primer ejercicio********////
var edad = 17;
var puedeVotar;

  if (edad >= 18) {
	  puedeVotar = "Puedes Votar";
} else if (edad < 18) {
	  puedeVotar = "No puedes votar";
}
console.log(puedeVotar)

//*****Segundo ejercicio Limite de edad &  */

var edad = 18;
var limVotar = 18;

  if (edad >= limVotar) {
	  console.log('Puede Votar');
} else {
  console.log('No puede Votar');
}

// *********3er ejercicio********////
var edad = 18;
var limVotar = 18;
var ciudad = 'CDMX';

if (edad >= limVotar && ciudad === 'CDMX') {
  console.log('Puede Votar');
} else {
console.log('No puede Votar');
}

/////******** Cuarto ejercicio */
var autor = "julioVerne";

switch(autor) {
  case "julioVerne":
    console.log('Minerar');
    break;
  case "julioVerne":
    console.log('Minerar');
     break;
  case "julioVerne":
    console.log('Minerar');
    break;
  default:
    console.log('No encontre lo que buscas');
    break;

}




//RETO 1 Operadores loogicos//
var time = 24;
var greeting;

if (time < 0) {
	greeting = "No existen horas negativas";
} else if (time < 12) {
	greeting = "Good morning";
} else if (time < 20) {
	greeting = "Good afternoon";
} else if (time > 24) {
	greeting = "Valor no valido";
} else if (time >= 20) {
	greeting = "Good evening";
}
console.log(greeting)

/////////////////////
var tiempo = 25;
var saludo;

if (tiempo < 0 || tiempo > 24) {
    saludo = "Valor invalido"
} else if (tiempo < 12) {
    saludo = "¡Buenos días!";
}  else if (tiempo < 20) {
    saludo = "¡Buenas tardes!";
} else if (tiempo >= 20) {
	saludo = "¡Buenas noches!";
}
console.log(saludo)

// SOLUCIÓN///
var time = 12;
var greeting;

if (time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
} else {
  greeting = "Unknown hour";
}

console.log(greeting) // Unknown hour


//// RETO 2 ////
// var i = 0;

// for(var i = 0; i <= 100; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }

//RETO 3 ////
// for(var i = 0; i <= 100; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }


for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
          isPrime = false;
}
    }
if(isPrime) {
  console.log(counter);
}
}


