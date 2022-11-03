//tipos de dados 

//todos são primitivos exceto os objetos.
var nome = " joão" //string
var idade = 16 //number 
var verdadeiroOufalso = true //Boolean 
var time; // Undefined
var comida = null // Null 
var novoObjeto = {} // object

// objetos 
const Alunos = {
    NomeDoAluno:'Erick',
    IdadeDoAluno: 16,
    TimeDoAluno: false,
}

console.log (Alunos.NomeDoAluno)

//verificar os tipos de dados 
console.log(typeof  nome);
console.log(typeof  idade);
console.log(typeof  verdadeiroOufalso);
console.log(typeof  time);
console.log(typeof  comida);
console.log(typeof  novoObjeto);

// Você pode somar string e assim concaternar as palavras. 

var nome2 = 'Lucas'
var sobrenome = 'Pereira'
 var nomecompleto = nome2 +" "+ sobrenome 
 console.log(nomecompleto)

 // Você pode somar números com strings, o resultado final será sempre uma string.

 var gols = 1000; 
 var frase = 'pelé fez ' + gols + 'gols'
 console.log(frase)

 // Template string
 var golacos = 1000;
 var frase2 = `MAtheus vaz fez mais de ${golacos} gols`
 console.log(frase2)

 //exercicio 1

 var nome3 = "Lucas"
 console.log(  nome3);

 //exercicio 2

 var  numerostring= '16' 
 console.log(numerostring);

 //exercicio 3

 var idade5 = 16
 console.log(idade5)

 //exercicio 4
 var nome6 = 'Lucas'
var sobrenome2 = 'Pereira'
 var nomecompleto2 = nome6 +" "+ sobrenome2
 console.log(nomecompleto2)

 //exercicio 5
 var frase3 = "It's time"
 console.log(frase3)

 //exercicio 6

 console.log(typeof  nomecompleto2);

 
 //var numero = prompt("Digite um valor")
 //console.log( numero )

 // Faça um programa que peça dois números para o usuário. Imprima a soma desses dois números. 

 //criar dois prompt dentro de uma variavel 
 let x = parseInt (prompt("digite o 1° valor: ")) 
 let y = parseInt (prompt("digite o 2° valor: "))
 //somar os dois resultados 
 let soma = x + y 
 console.log(soma)