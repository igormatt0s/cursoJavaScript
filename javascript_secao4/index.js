const book = {
    Title: 'Atomic Habits',
    Author: 'James Clear',
    Pages: 306,
    Chapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    }
} //é possível criar um objeto e nele ter propriedades com multiplos valores

console.log(book)

//função dentro de um objeto
const book0 = {
    Title: 'Atomic Habits',
    Author: 'James Clear',
    Pages: 306,
    Chapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}

book0.printBook() //impprimindo no console a função
console.log(book0)

//Criando Factory
function createBook(title, author, pages){
    const books = {
        Title: title,
        Author: author,
        Pages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return books
} //a function é a factory

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('The Hobbit', 'Tolkien', 280)

console.log(book1, book2)

//Adicionando propriedades a um objeto sem alterar a formatação do objeto
book1.Color = 'White'
console.log(book1, book2)

// Criando Constructor
// Não precisa dar um nome ao objeto
// No Constructor por convenção a primeira letra é maiúsucla
function CreateBook(title, author, pages){
    this.bookTitle = title; // esta variável é igual a tal valor e retorna a função automaticamente
    this.bookAuthor = author;
    this.bookPages = pages;
    this.printBook = function() {
        console.log('Printing...')
    }
}

const book3 = new CreateBook('Harry Potter', 'Rowling', 230) // Para chamar o Constructor é preciso adicionar a palavra new antes

console.log(book3)

// Exemplos de Built in Objects
console.log(Math.max(1, 3, 15, 2, 7, 4, 25.6))

// Built in Object String
let message = 'Hey, my name is Igor'

console.log(message.startsWith('Hey'))
console.log(message.endsWith('or'))
console.log(message.length)
console.log(message.includes('Igor'))
console.log(message.includes('igor'))

// Template Literals
let firstName = 'Joe'
const email = 'Hi '+firstName+', \nThe meeting is confirmed! \nIgor'

const email2 = `Hi ${firstName},
The meeting is confirmed!
Igor` // sinal da crase ` significa que ele usa um templeta já existente, ou seja, imprimirá a mensagem do jeto que está escrito no código

console.log(email)
console.log(email2)