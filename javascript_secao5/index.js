// Array Primitivos
let friends = ['Marcos', 'Ana', 'Marcela']
let num = [1, 2, 3, 4, true]

console.log(friends)
console.log(num)

// Add valor na array
num.push(10, 11, 12) //add valor no final da array
console.log(num)
num.unshift(0, 0.5) //add valor no início da array
console.log(num)
num.splice(4, 0, 20, 30, 40) //add valor no meio da array a partir do index 4, vai deletar nenhum (0) valor a partir do index 4 e add os num 20, 30, 40
console.log(num)

//Localizar um item na array
console.log(num.indexOf(0.5)) //retorna o número do index onde foi encontrado
console.log(num.indexOf(7)) //retorna -1 porque não foi encontrado

console.log(num.includes(0.5)) //retorna true se foi encontrado
console.log(num.includes(7)) //retorna false de não foi encontrado

//Array de Referência
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies)
console.log(movies.find(function(movie){
    return movie.movieName == 'The Matrix'
}))// find() é um método que só funciona com uma função dentro dele. Ele retorna o id e movieName se encontrar, se não encontrar ele retorna undefined

// Arrow function (=>) é uma função com return incluso, encurta a função e tem o mesmo resultado
console.log(movies.find(movie => movie.movieName == 'Dejavu')) // ele procura movie, executar a função (movie está dentro de movieName) e procura pelo movieName

// Remover itens de uma array
console.log(num)
const final = num.pop() // tirar o último valor da array e atribui esse valor a variavel final
console.log(num)
console.log(final)
const inicio = num.shift() // tirar o primeiro valor da array e atribui esse valor a variavel inicio
console.log(num)
console.log(inicio)
const meio = num.splice(3, 1) // tirar um valor da array por meio do index, a partir do index 3 retira 1 item e atribui esse valor removido a variavel meio
console.log(num)
console.log(meio)
const meio2 = num.splice(3, 3) // a partir do index 3 retira 3 item e atribui esses valores removidos a variavel meio
console.log(num)
console.log(meio2)

// Esvaziando uma array
let price = [1.99, 2.99, 3.49, 9.98]
console.log(num)
num = []
console.log(num)
//ou
console.log(friends)
friends.length = 0
console.log(friends)
//ou
console.log(price)
price.splice(0, price.length) // tirar os valores da  array a partir do index 0 até o tamanho total da array
console.log(price)

// Concatenar uma array: juntar duas arrays em uma só
//Slice: dividir uma array em duas partes
let consonants = ['b', 'c', 'd']
let vowels = ['a', 'e']
all = consonants.concat(vowels) // junta consonants com as vowels no final

half = all.slice(3, 4).concat(all.slice(0, 2)) //slice ele tem as informações de inicio e fim, começa do index 3 e vai até antes do 4 pegando apenas o valor 'a' e concatena com os valores do index de 0 a antes do 2 pegando apenas 'b' e 'c'

console.log(all)
console.log(half)

//Join array: caso precise adicionar um caracter especial ou uma letra a cada um dos itens
let clients = ['Igor', 'José', 'Maria', 'Alice']

console.log(clients)

let clientsJoin = clients.join(', ') //converte em String e adicionou ', ' na frente de cada item

console.log(clientsJoin)

//Organizar array de forma alfabética ou numérica, ou o inverso do que ela está

clients.sort() //organiza na ordem alfabética ou numérica

console.log(clients)

clients.reverse() // ordem inversa da que está no momento

console.log(clients)

//Verificando elementos de uma array e testando condições

const tempLondon = [18, 13, 8, 2]
const tempEUA = [18, -13, 8, 2, -4, 0]

const tempPositive = tempLondon.every(function(value){
    return value >= 0
}) //every é para checar todos os valores dentro da array

const tempNegative = tempEUA.every(function(value){
    return value >= 0
}) //como ele verificou e achou um item negativo ele retorna false

console.log(tempPositive)
console.log(tempNegative)

//Filtrando uma array com o filter
const returnTempNegative = tempEUA.filter(function(value){
    return value < 0
}) // filter mostra os resultados da função

console.log(returnTempNegative)

const returnTempPositive = tempEUA.filter(value => value >= 0) // função convertida para Arrow Function

console.log(returnTempPositive)