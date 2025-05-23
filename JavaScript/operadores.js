/* Operadores y Condicionales */

// Operadores
// ****************************************************************************
// Operadores aritmeticos
// suma: +
// Resta: -
// Multiplicacion: *
// Exponenciación: **
// División: /
// Modulo: %
// incremento: ++
// Decremento: --

// console.log(3 + 3);
// console.log(3 - 3)
// console.log(3 * 3)
// console.log(3 ** 3)
// console.log(3 / 3)
// console.log(3 % 3)
//console.log(++3) // genera error su uso es dentro de iteradores

// let number = 10
// while (number >= 3 ) {
//     console.log(number)
//     --number
//     console.log(number)
// }

// ****************************************************************************

// Operadores de asignacion

// Asignacion: =
let total = 3 + 3
console.log(total)

// Asignacion con suma: +=
total += 3 // total = total + 3
console.log(total)

// Asignacion con resta
total -= 3 // total = total - 3
console.log(total)

// Asignacion con multiplicacion
total *= 3 // total = total * 3
console.log(total)

// Asignacion con division
total /= 3 // total = total / 3
console.log(total)

// Asignacion con modulo
total %= 3 // total = total % 3
console.log(total)

// Asignacion con exponenciacion
total **= 3 // total = total ** 3
console.log(total)

// ****************************************************************************

// operadores de comparacion

// igual que: ==
console.log(3 == 3)

// igual valor e igual tipo ===
console.log(3 === 3)
console.log(3 === '3')

// diferente de: != (! =)
console.log(3 != 1)
console.log(3 != 3)
console.log(3 != '3')

// Diferente valor diferente tipo
console.log(3 !== 1)
console.log(3 !== '3')

// mayor que: > 
console.log(3 > 1)
console.log(3 > 3)
console.log(3 > 5)
console.log(3 > '3')

// menor que: <
console.log(3 < 2)
console.log(3 < 5)

// mayor o igual: >=
console.log(3 >= 1)
console.log(3 >= 3)

// menor o igual <=
console.log(3 <= 3)
console.log(3 <= 5)
console.log(3 <= 1)

// operador ternario: ?
3 == 5 ? console.log('es igual') : console.log('es diferente')

// ****************************************************************************
// ESTRUCTURAS DE CONTROL CONDICIONAL

// if else
const edad = 27

// sintaxis comun
if (edad >= 18) {
    console.log('es mayor de edad')
} else {
    console.log('es menor de edad')
}

// sintaxis alterna para codigo corto
if (edad < 18 ) console.log('es un niño')
else console.log('es adulto')


// switch case
const dia = 'lunes'

switch (dia) {
    case 'lunes':
        console.log('primer dia de la semana')
        break

    case 'viernes':
        console.log('Fin de semana')
        break

    default:
        console.log('es un dia normal')
}

