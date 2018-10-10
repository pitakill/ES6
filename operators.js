// Valores por defecto a las funciones
function sumaBasica (a, b) {
  return a + b
}

console.log("Sin verificar argumentos")
console.log(sumaBasica())
console.log(sumaBasica(1))
console.log(sumaBasica(1, 2))

function sumaSimple (a, b) {
  if (a === undefined) a = 0
  if (b === undefined) b = 0
  return a + b
}

console.log("Verificando argumentos y poniendo unos por defecto")
console.log(sumaSimple())
console.log(sumaSimple(1))
console.log(sumaSimple(1, 2))

function suma (a = 0, b = 0) {
  return a + b
}

console.log("Verificando argumentos y poniendo unos por defecto con ES6")
console.log(suma())
console.log(suma(1))
console.log(suma(1, 2))

// ES5
function saludos (idioma) {
  let respuesta

  switch(idioma) {
    case('en'):
      respuesta = "Hello World"
      break
    case('fr'):
      respuesta = "Aló Monde"
      break
    case('es'):
      respuesta = "Hola Mundo"
      break
    default:
      respuesta = "Hola Mundo"
  }

  console.log(respuesta)
}

saludos()

// ES6
function saludosMejorada (idioma = 'es') {
  let respuesta

  switch(idioma) {
    case('en'):
      respuesta = "Hello World"
      break
    case('fr'):
      respuesta = "Aló Monde"
    case('es'):
      respuesta = "Hola Mundo"
  }

  console.log(respuesta)
}

saludosMejorada()

// Valores restantes argumentos
function sumaRestantes(a, b, c) {
  const restantes = Array.prototype.slice.call(arguments, 3);

  let suma = 0
  // Debemos sumar todo lo restante (asumiendo que son números)
  for (let i = 0; i < restantes.length; i++) {
    suma = suma + restantes[i]
  }

  return a + b + c + suma
}

console.log(sumaRestantes(1,2,3,4,5,6,7,8,9,10))

// ES6
function sumaRestantesMejorada(a, b, c, ...d) {
  let suma = 0
  // Debemos sumar todo lo restante (asumiendo que son números)
  for (let i = 0; i < d.length; i++) {
    suma = suma + d[i]
  }

  return a + b + c + suma
}

console.log(sumaRestantesMejorada(1,2,3,4,5,6,7,8,9,10))

// Spread operator

// ES5
const vocalesFuertes = ['a', 'e', 'o']
const vocalesDebiles = ['i', 'u']

const vocales = vocalesFuertes.concat(vocalesDebiles)

console.log(vocales)

// ES6
const vocalesConES6 = [...vocalesFuertes, ...vocalesDebiles]

console.log(vocalesConES6)
