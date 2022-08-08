function submit(event) {
    event.preventDefault();

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


window.onload = function () {
    const clearBtn = document.getElementById('reset-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitbtn = document.getElementById ('submit-btn');
    submitbtn.addEventListener('click', submit);
}