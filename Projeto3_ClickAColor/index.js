
const color = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Grey', 'Black', 'Pink', 'Brown', 'Orange'] //poderia ser em hexadecimal também

const btn = document.getElementById('btn')

const cor = document.querySelector('.color') //método que retorna para a HTML o primeiro que for passado para ele

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = color[randomColor] //vai no documento e pega o background do body e atribui o valor
    cor.textContent = color[randomColor]
}) //evento de escuta para ver quando o botão será clicado vai fazer a função

//Função para gerar um número randômico
function getRandomColor(){
    //return Math.floor(Math.random() * 10) // arredonda para baixo os numeros fracionários do random que foram multiplicados por 10 para alterarem de 0 até 9
    return Math.floor(Math.random() * color.length) // seleciona números de 0 até o tamanho do array color de forma random
}