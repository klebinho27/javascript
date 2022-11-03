var pessoa = {
    nome: 'Grazi',
    idade: 20, 
    profissao: 'monitora do professor matheus',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objeto com funções ou -métodos 

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    area: function(lado){
        return lado * lado
    }

}

//Arrays

//É um grupo de valores geralmente relacionados. servem para guardarmos diferentes valores em uma única variável.

var videoGAmes = ['PS4', 'XBox', 'Switch']

console.log(videoGAmes.length)


