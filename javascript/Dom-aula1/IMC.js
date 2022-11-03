    const nome = document.querySelector('#nome')
    const altura = document.querySelector('#altura')
    const peso = document.querySelector('#peso')
    const calcular = document.querySelector('#calcular')
    const resultado = document.querySelector('#resultado')

    function imc(){
        if(nome.value !== ''){
            const valorIMC = (peso.value/ (altura.value**2))
            
            if(valorIMC <= 25){
                resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você esta abaixo do peso`
            } else if(valorIMC > 25 && valorIMC <= 75 ){
                resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você esta no peso ideal`
            } else if(valorIMC > 75){
                resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você esta fora do peso`
            }



        }else{
            alert('preencha o compo vazio!')
        }
    }

    

    calcular.addEventListener('click', imc)