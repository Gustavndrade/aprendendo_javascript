
function Contador(){
    var inicio = document.getElementById('Inicio');
    var fim = document.getElementById('Fim');
    var passo = document.getElementById('Passo');
    var resultado = document.getElementById('resultado');
     
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Valores invalidos, tente novamente")
    } else{
    
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            for(var c = i; c<= f ; c += p){
            resultado.innerHTML += `${c} \u{1F449}`;
            }
        }
            else{
                for(var c = i; c >= f ; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`;
                }
            }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
