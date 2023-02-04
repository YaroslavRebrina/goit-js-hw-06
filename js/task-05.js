const inputRef = document.querySelector("input#name-input")
const userName = document.querySelector("span#name-output")



const onInputHandler = () => {{
    if (inputRef.value === '') {
       return userName.textContent= 'Anonymous'
    }
    return userName.textContent = inputRef.value
}
    
}

inputRef.addEventListener("input", onInputHandler); 