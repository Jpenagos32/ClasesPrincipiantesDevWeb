// BUCLES Y FUNCIONES

// BUCLES 
// for
// while
// do-while
// forEach (arreglos)
// for of (arreglos)

// for
for (let i = 0; i < 5; i++) {
    console.log('bucle for')
    console.log(i)
}

// while
let iteradorWhile = 5

while (iteradorWhile < 5) {
    console.log('bucle while')
    console.log(iteradorWhile)
    iteradorWhile++
}

// do-while
let iteradorDoWhile = 5
do {
    console.log('bucle do-while')
    iteradorDoWhile++
} while (iteradorDoWhile < 5);

// ***********************************************************************

// FUNCIONES
// sintaxis comun
function suma(num1, num2) {
    console.log(num1 + num2)
}

suma(13, 2)
suma(4, 5)

// sintaxis de flecha
// const sumaFlecha = (num1, num2) => console.log(num1 + num2)
// sumaFlecha(2,3)
const sumaFlecha = (num1, num2) => {
    console.log(num1 + num2)
}

sumaFlecha(5, 4)
