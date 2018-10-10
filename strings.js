// ES5

var animal = {
  vidas: 9,
  patas: 4,
  especie: "gato"
};

var cadena1 = "El animal " + animal.especie + " tiene " + animal.patas + " patas y supuestamente " + animal.vidas + " vidas."

console.log(cadena1)

// ES5
var cadena2 = `El animal ${animal.especie} tiene ${animal.patas} patas y supuestamente ${animal.vidas} vidas.`

console.log(cadena2)
