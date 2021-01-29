// Ejemplo 1//

function calculateAge(birthYear) {
    var age = 2020 - birthYear;
    return age;
}
var ageJulio = calculateAge(1987);
    console.log('La edad actual es ', ageJulio);

// Ahora podemos llamar la misma función las veces que queramos sin 
// necesidad de repetir las mismas líneas de código una y otra vez. 
// Las funciones también pueden llamar a otras funciones

function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
}
// Algunas funciones no retornan valor alguno, como yearsUntilRetirement 
// qué sólo muestra un mensaje en consola. En este caso no podemos guardar 
// el resultado en una variable como hicimos con ageJohn
yearsUntilRetirement(1987, 'Julio Aguilar');

//EXPRESIÓN DE FUNCIÓN//
var square = function(number) {
    return number * number;
}
var square0fFour = square(4)
    console.log('Expresión de función', square0fFour);

// Pero las expresiones de funciones también pueden tener un nombre
//  para referirse a sí mismas, como en una función recursiva.
var factorial = function fac(number) {
    return number < 2 ? 1 : number + fac(number - 1)
}
    console.log('Valor factorial es', factorial(5));
// EJEMPLO 2///

let outputStrings = [7]
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}