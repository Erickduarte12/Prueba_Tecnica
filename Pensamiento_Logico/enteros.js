
function impares(numero) {
    if (numero < 1 || !Number.isInteger(numero)) {
        console.log('Proporcione un numero mayor a: 0')
        return [];
    }
    let impares = []

    for (let i = 1; i <= numero; i += 2) {
        impares.push(i) 
    }
  return impares
}

const numeroEntrada = 9
const imparesHasta = impares(numeroEntrada)
console.log(imparesHasta)
