
function operacionesAritmeticas(x, y, z) {
    let suma = x + y
    let multiplicacion = suma * z 
    let seno = Math.sin(multiplicacion)
    return seno;
}

const resultado = operacionesAritmeticas(2,3,4)
console.log(resultado)
