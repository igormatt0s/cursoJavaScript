
function formatMoney(value){
    value = Math.ceil(value * 100) / 100 //ceil()pega o valor e arredonda para mais
    value = value.toFixed(2)
    return '$'+value
} //função para fixar os decimais em dois

function formatSplit(value){
    if(value == 1) return value+' person'
    return value+' people'
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    console.log({bill, tipPercent, split}) // visualizar com os Keys values

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent+'%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}