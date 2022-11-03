var inputElement = document.querySelector('.new-tasks-input')
const addTaksButton = document.querySelector('.new-task-button')
const taskContainer = document.querySelector('.task-container')

function validarBotao(){
    const texto = document.createElement('p')
    taskContainer.appendChild(texto)
    texto.innerText = inputElement.value
}


addTaksButton.addEventListener('click', validarBotao)