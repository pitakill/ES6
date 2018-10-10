// ES5
var objeto = {
  id: 6,
  contador: function () {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};

objeto.contador()

// ES6
const objeto1 = {
  id: 66,
  contador: function () {
    setTimeout(() => {
      console.log(this.id)
    }, 1000)
  }
}

objeto1.contador()

// ¿qué sucederá?

const polo = {
  paletas: 9,
  comprar: function() {
    this.paletas++
  },
  vender: () => {
    this.paletas--
  }
}

polo.comprar()
polo.vender()

console.log(polo.paletas)
