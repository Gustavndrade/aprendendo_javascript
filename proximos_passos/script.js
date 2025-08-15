let persona = {nome:"Gustavo", altura:176, peso:85, engordar(p=0){
    console.log('engordou: ')
    this.peso += p
}}
persona.engordar(100)
console.log(`${persona.nome} pesa ${persona.peso}`)