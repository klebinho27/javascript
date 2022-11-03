//Funções 
/*
    function NomeDaFunção (parâmetros){
        ações
    }
*/

var a = 7 
var b = 8 
var total = a + b 
console.log( total)

function soma(c,d){

    var total = c + d 
    return console.log(total)
}

soma(10,50)
soma(7,5)

//calculo da área de umn quadrado 

function areaDeUmQuadrado(lado){

 var area = lado*lado 
 return console.log(area)  
}


areaDeUmQuadrado(4)

//exercicio

function areaDeUmRetangulo(a,b){
    var area = a * b
    return console.log(area) 
}

areaDeUmRetangulo(30,20)

//função

function pi(){
    return 3.1415
}

function corFavorita(cor){
    if(cor === 'azul'){
        return 'gosta do céu'
    }else if (cor === 'verde'){
        return 'É palmeirense'
    }else{
        return 'você gosta de nada'
    }
}

//exercicio 1

function areaDeUmQuadrado2(lado2){

    var area2 = lado2 + lado2 + lado2 + lado2
    return console.log(area2)  
   }
   areaDeUmQuadrado2(4)

   //exercicio 2
   function nomeCompleto(nome,sobrenome){

    var total = nome +" " + sobrenome 
    return console.log(total)
}
nomeCompleto('Lucas','Pereira')

    //exercicio 3

    function par(numero){
        if (numero % 2 == 0){
            console.log('par')
        }else{
            console.log('impar')
        }
    }
    