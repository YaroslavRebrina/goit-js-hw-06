const loginFormRef = document.querySelector('.login-form');
const buttonSumbitRef = document.querySelector('button');

const onSumbitHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    
    if (email.value.trim() === '' || password.value.trim() === '') {
       return alert(`Please insert your information in all fields!`)
    }

    const data = {
        [email.name]: email.value,
        [password.name]: password.value
    }

    console.log(data)
    event.currentTarget.reset()
}


loginFormRef.addEventListener('submit', onSumbitHandler)
