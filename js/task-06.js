const inputRef = document.querySelector('#validation-input')

const onBlurInputValidation = () => {
    if (inputRef.value.length < inputRef.dataset.length) {
        inputRef.classList.add('invalid')
    } else {
        if (inputRef.classList.contains('invalid')){
            inputRef.classList.replace('invalid', 'valid')
        } else {
            inputRef.classList.add('valid')
        }
    }
}

inputRef.addEventListener('blur', onBlurInputValidation)