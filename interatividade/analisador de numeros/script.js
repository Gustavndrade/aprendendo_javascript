let escrita = document.getElementById('resultado')
let numeros = [] 
let adiciona = document.getElementById('resposta')

function Adicionar(){
    let valor = document.getElementById('numero').value
    let num = Number(valor)
    escrita.innerText = ''

    if(num < 0 || num > 100){
        window.alert('Numero invalido')
    }else { 
        numeros.push(num)
        let item = document.createElement('option')
        item.text += `numero ${num} adicionado`
        adiciona.appendChild(item)
    }
    
}

function Calcular(){

let maiorNumero = numeros[0]
let menorNumero = numeros[0]
let soma = 0
let media = 0

for (let numero of numeros){
    soma += numero
}

    media = soma/numeros.length

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
      }else
       if (numeros[i] < menorNumero){
            menorNumero = numeros[i]
         }
    } 
    escrita.innerHTML += `Ao todo foram ${numeros.length} numeros cadastrados.<br>`
    escrita.innerHTML += `O maior Valor informado foi ${maiorNumero}.<br>`
    escrita.innerHTML += `O menor valor informado foi ${menorNumero}.<br>`
    escrita.innerHTML += `O a soma dos valores informados foi ${soma}.<br>`
    escrita.innerHTML += `O a media valores informados foi ${media}.<br>`
}
