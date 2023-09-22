console.log('Primeiro código dentro do JS');//imprime no console

//Variáveis
//var nome_da_variavel caiu em desuso
let firstName = 'Igor';
let lastName = 'Mattos'
let num = 1;
let price = 10.00 //ex. de float
let available = true //ex. de booblean
let color //sem atribuição ou com atribuição (let color = undefined) então é do tipo undefined
num = null //valor vazio
console.log(firstName);
console.log(lastName)
console.log(num);

//variavel constante em que o valor não pode ser alterado
const ano = 2023;
console.log(ano);

//mostrar no console o tipo da variável
console.log(typeof price)
price = 'real' //mudei o tipo da variável price
console.log(typeof price)

//Objetos
let pen = {
    itemName: 'Pen',
    itemPrice: 2.99,
    itemAvaliable: true,
    itemColor: 'Blue'
}

console.log(pen) //imprime o objeto Pen e suas propriedades

pen.itemColor = 'Red' //trocar uma propriedade do objeto Pen

console.log(pen.itemColor) //imprimir apenas uma propriedade do objeto

//Arrays
let friends = ['Marcos', 'Silvia', 'Elisa'] //lista de itens que podem ser de tipos diferentes separados por vírgulas

console.log(friends) //imprime a lista com os indexes dos itens começando do 0
friends[2] = 'Junior'
console.log(friends[1]) //imprime somente o item do index 1 - Silvia

//Functions
function sale() {
    console.log('Approved')
} //criação da function

sale() //chamada da function

function saleStatus(status, total) {
    console.log('Transaction '+status+ '!\nTotal amount: $'+total)
} //criação da function com parâmetro de referência

saleStatus('Approved', 30.00) //chamada da function com parâmetro de referência

function percentage10(price){
    return price - (price * 10 / 100)
}//chamada da function com retorno

console.log(percentage10(20))

//Operadores
let num1 = 3
let num2 = 2
let total = num1 + num2
console.log(total)
console.log(num1 % num2) //resto da divisão
console.log(num1 ** num2) //exponencial, ex. 3^2

//operador de incremento ++
console.log(++total) //imprime 6
console.log(total++) //imprime 5 e o total passa a ser agora 6
//operador de decremento --
console.log(--total) //imprime 4
console.log(total--) //imprime 5 e o total passa a ser agora 4

num1 += 20 //pega o num1 = 3 e soma mais 20 e atribui esse valor ao num1
num2 -= 20
num1 *= 20
num2 /= 20
let num3 = '0'

console.log(num2 >= 0)
console.log(num2 < 0)
console.log(num2 === 0) // Strict verifica se eles são iguais em valor e em tipo
console.log(num3 === 0)
console.log(num2 !== 0)
console.log(num2 == 0) // Lose verifica o valor apenas
console.log(num2 != 0)
console.log(firstName === 'Igor')

let driver = 90 //velocidade do motorista
//Se a velocidade for maior que 110 (TRUE) ele retorna 'Above', se for FALSE ele retorna 'Below'
let speed = driver > 110 ? 'Above' : 'Below' //operadores ternários
console.log(speed)

//Operadores lógicos AND (&&), OR (||) e NOT (!)

let temIdadeMinima = true
let temTituloEleitor = false

let podeVotar = temIdadeMinima && temTituloEleitor
console.log('Pode votar: '+podeVotar)
let votar = temIdadeMinima || temTituloEleitor
console.log(votar)

let podeViajar = !podeVotar //oposto do podeVotar
console.log('Pode viajar: '+podeViajar)

let corCliente = 'White'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque //ordem de prioridade é a corCliente primeiro
//atribui ao corVendida o primeiro artributo defined

console.log(corVendida)

corCliente = undefined
corVendida = corCliente || corEstoque
console.log(corVendida)

//ordem de precedência: (),* ou / e + ou -

let driverSpeed = 110
if(driverSpeed > 110){
    console.log('Driving too fast')
}else if(driverSpeed >= 40 && driverSpeed <= 110){
    console.log('OK')
}else{
    console.log('Driving too slow')
}

let airportName = 'MCO'
switch(airportName){
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknown')     
} //default é para outra diferente dos casos


//Laços de repetição
for(let i = 0; i <= 10; i++){
    console.log('Número '+i)
}

let i = 0
while(i <= 10){
    if(i === 5) break //uma funcionalidade para qualquer laço de repetição de parar aqui o loop
    console.log('Número '+i)
    i++
}

i = 0
do{
    console.log('Número '+i)
    i++ 
}while(i <= 10)

const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for(let id in myCar)
    console.log(id, myCar[id]) //laço que pega as propriedades do objeto com o id e pega também os valores das propriedades no myCar[naquela propriedade id]

for(let id of friends)
    console.log(id) //laço pega os valores dos ids de friends