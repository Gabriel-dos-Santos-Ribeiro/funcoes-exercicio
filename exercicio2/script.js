// A)
function somando(num1, num2) {
    const soma = num1 + num2
    const resultSoma = soma
    console.log(`A soma dos dois valores é : ${resultSoma}`)

}

somando(5, 5)


//  B) 
function operacaoMenorouIgual(n1, n2) {
    const maiorOuIgual = n1 >= n2
    console.log(`O primeiro valor é maior ou igual ao segundo ? ${maiorOuIgual}`)

}

operacaoMenorouIgual(100, 100)

// C)
function ehPar(val){
    const seraParouN = (val % 2) === 0
    console.log(`O numero digitado é PAR ? ${seraParouN}`)

}

ehPar(10)

// D)

function salBruto(cash){
    const desINSS = cash * 0.1
    const salLiquido = cash - desINSS
    

    return salLiquido
}

console.log(salBruto(2000))
console.log(salBruto(3000))
