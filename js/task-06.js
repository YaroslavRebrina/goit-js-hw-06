const inputRef = document.querySelector('#validation-input')

const onBlurInputValidation = () => {
    inputRef.classList.remove('invalid', 'valid')

    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
}

inputRef.addEventListener('blur', onBlurInputValidation)
