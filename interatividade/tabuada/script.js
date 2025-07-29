function Tabuada() {
    var numero = document.getElementById('numero')
    var resp = document.getElementById('resposta')

    if(numero.value.length == 0){
        window.alert("Por favor, digite um número")
    } else{
        var n = Number(numero.value)
        resp.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${i*n}`
            resp.appendChild(item)
        }
    }
}