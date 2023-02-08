// A)

function funcao1(n1, n2) {
    const soma = n1 + n2 
    const frase = `O resultado de ${n1} + ${n2} é : ${soma}`
    return frase
}


// -----------------------------

function funcao2(n1, n2) {
    const subtracao = n1 - n2
    const frase = ` o resultado de ${n1} - ${n2} é : ${subtracao}`
    return frase
}


// -----------------------------

function funcao3(n1, n2) {
    const multiplicacao = n1 * n2
    const frase = `o resultado de ${n1} * ${n2} é : ${multiplicacao}`
    return frase
}


// -----------------------------

function funcao4(n1, n2) {
    const divisao = n1 / n2 
    const frase = `O resultado de ${n1} / ${n2} é : ${divisao}`
    return frase
}



// B )
const usuario1=Number(prompt('Digite um número :'))
const usuario2=Number(prompt('Digite outro número :'))

// C )

const opSoma = (funcao1(usuario1, usuario2))

const opSub = (funcao2(usuario1, usuario2))


const opMulti = (funcao3(usuario1, usuario2))

const opDivi = (funcao4(usuario1, usuario2))

// D)
console.log(opSoma)
console.log(opSub)
console.log(opMulti)
console.log(opDivi) 
