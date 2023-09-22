// Function Declaration
// a ordem não altera no resultado podendo aparecer primeiro o nome da função e depois a declaração dela
    //movie()
    //functionmovie(){...}
//Isso ocorre por causa da funcionalidade do Hoisting que tem no JavaScript Engine onde ele move as função para serem executadas primeiro
function movie(){
    console.log('Donie Darko')
}

movie() //call - chamada de função

// Function Expression - função associada a uma variável
// a ordem altera o resultado devendo aparecer primeiro a declaração da função depois o nome da função
const car = function(){
    console.log('Tesla')
}

car() //chama a variável

const truck = car

truck() //duas variáveis associadas a mesma função

//Argumentos em functions
function sumNum(a, b){
    return a + b
} //a e b são argumentos

console.log(sumNum(10, 20))

function price(){
    let total = 0
    for (let value of arguments)
        total += value //vai somando os valores
    return total
}// para o valor em argumentos, ou seja value vai assumir os valores de cada argumento passado como referência

console.log(price(10, 20, 30, 40))// não precisou definir a quantidade de argumentos na declaração da função porque já foi definidos na chama

//Parâmetros de default
function carLoan(loan, years, rate = 2.5){
    return (loan * rate / 100 * years) + loan
}//calculo de um financiamento de um carro
//o rate já tem um valor default nele

console.log(carLoan(20000, 5))