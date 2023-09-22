
function outcome(){
    let num1 = Number(document.getElementById('num-one').value) //pegando do HTML pelo id o valor da variável num-one e convertendo esse valor para Number
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    // conferir no documento pelo id se o radio está checked, retornando true ou false
    if(document.getElementById('box1').checked){
        total = num1 + num2
    }else if(document.getElementById('box2').checked){
        total = num1 - num2
    }else if(document.getElementById('box3').checked){
        total = num1 * num2
    }else{
        total = num1 / num2
    }
   
    document.getElementById('resultArea').innerHTML = 'Result: '+String(total) // converte o total para String
    //innerHTML insere no documento HTML
}