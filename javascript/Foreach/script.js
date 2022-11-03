//Array
//É um grupo de valores. Servem para guardarmos diferentes valores em uma única variriável.
/*
var VideoGames = ['switch', 'PS4', ' XBox']

var numeros = [1,2,3]

 console.log(VideoGames[0])
 console.log(VideoGames[1])
 console.log(VideoGames[3])

 console.log(numeros[0] + numeros[2])
 
var i = 0;
while(i<10){
    console.log(i)
    i = i +1
}


for (var i= 0; i < 10; i = i +1){
    console.log(i)
}
*/
/*
var VideoGames = ['switch', 'PS4', ' XBox']

//ForEach
//FOrEach é um metodo que executa uma função para cada item array. É uma forma mais simples de utilizarmos um loop com arrays

VideoGames.forEach(function(a, b, c){
    console.log(a, b, c)
})
*/
//exercicio 1

var brasil = [1958, 1970, 1994, 2002]

brasil.forEach(function(c){
    console.log('o brasil ganhou a copa' + c)
})
