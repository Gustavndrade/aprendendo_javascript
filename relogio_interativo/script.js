function atualiza(){
    var msg = document.getElementById('mensagem');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    if(hora > 0 && hora < 12){
        msg.innerHTML = `<p>BOM DIA <br> São ${hora}:${minuto} horas </p>`
        img.src = 'imagens/manha-redonda-removebg-preview.png'
        document.body.style.background = '#B0E2E1'
    } 
    else if (hora > 12 && hora <= 18){
        msg.innerHTML = `<p>BOA TARDE <br> São ${hora}:${minuto} horas </p>`
        img.src = 'imagens/tarde-redonda-removebg-preview.png'
        document.body.style.background = '#F75804'
    } 
    else {
        msg.innerHTML = `<p>BOA NOITE <br> São ${hora}:${minuto} horas </p>`
        img.src = 'imagens/noite-redonda-removebg-preview.png'
        document.body.style.background = '#032145'
    }
}