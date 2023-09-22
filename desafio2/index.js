let value = Number(prompt('Enter the product value: ')) //Number converte o que for coletado no prompt em Number

console.log(value)
console.log(typeof(value))

if(value >= 20){
    document.getElementById('result').innerHTML = 'Appproved'
}else{
    document.getElementById('result').innerHTML = 'Denied'
}