function submit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
        alert ('Dados inválidos');
    } else {
        alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }

}

window.onload = function() {
    const btn = document.querySelector('#submit-btn');
    btn.addEventListener('click', submit);
};

function clearFields(){
    const inputs = document.querySelectorAll('input');
    const textArea = document.getElementById('why');
    for (let index = 0; index < inputs.length; index += 1) {
        const userinput = inputs[index];
        userinput.value = ''; // explicação dessa parte na mentoria
        userinput.checked = false;
    }
    textArea.value = '';
}



function enableSubmit() {
    const btnSubmit = document.querySelector('#submit-btn');
    const concordo = document.querySelector('#concordo');
    btnSubmit.disabled = !concordo.checked;
    // ! -  esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Seja algo for verdadeiro ele retornará falso e vice-versa.
    // Nesse código estamos dizendo que a propriedade disabled do btnSubmit é igual a negação da propriedade checked da checkbox btn-reset. Sendo assim, se a checkbox estiver "checkada" nosso botão não estará desabilitado (estará habilitado)
}

window.onload = function () {
    const clearBtn = document.getElementById('reset-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitbtn = document.getElementById ('submit-btn');
    submitbtn.addEventListener('click', submit);
    const concordo = document.querySelector('#concordo');
    concordo.addEventListener('change', enableSubmit);
}

function textInputValidation() {
    const email = document.getElementById('email-usuario');
    const invalidEmail = email < 10 || email > 50;
    const nome = document.getElementById('nome-usuario');   
    const invalidNome = nome < 10 || nome > 40;
    const reason = document.getElementById('why');
    const invalidReason = reason > 500;

    if (invalidEmail || invalidNome || invalidReason){
        return false;
    } else {
        return true;
    }
}

