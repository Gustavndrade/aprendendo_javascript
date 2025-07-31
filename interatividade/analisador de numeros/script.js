let escrita = document.getElementById('resultado')
let adiciona = document.getElementById('resposta')
let num = document.getElementById('numero')
let numeros = [] 

function Limpa(){
    escrita.innerHTML = ''
    for(let i = 0; i < numeros.length; i++){
        adiciona.remove(0)
    }
    numeros.length = 0
} 

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function naLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(){
if(isNumero(num.value) && !naLista(num.value, numeros)){
    let item = document.createElement('option')
    numeros.push(Number(num.value))
    item.innerText += `Número ${num.value} adicionado`
    adiciona.appendChild(item)
    item.innerText += ''
    
    
}else {
    window.alert('Caracter invalido ou já adicionado')
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
    escrita.innerHTML = ''
    escrita.innerHTML += `Ao todo foram ${numeros.length} numeros cadastrados.<br>`
    escrita.innerHTML += `O maior Valor informado foi ${maiorNumero}.<br>`
    escrita.innerHTML += `O menor valor informado foi ${menorNumero}.<br>`
    escrita.innerHTML += `A soma dos valores informados foi ${soma}.<br>`
    escrita.innerHTML += `A media valores informados foi ${media}.<br>`
}
