
function Contador(){
    var inicio = document.getElementById('Inicio');
    var fim = document.getElementById('Fim');
    var passo = document.getElementById('Passo');
    var resultado = document.getElementById('resultado');
     
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Valores invalidos, tente novamente")
    }
    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for(var c = i; c<= f ; c += p){
        resultado.innerHTML += `${c}`;

    }
}
