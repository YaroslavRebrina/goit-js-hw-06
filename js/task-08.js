const loginFormRef = document.querySelector('.login-form');
const buttonSumbitRef = document.querySelector('button');

const onSumbitHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
       return alert(`Please insert your information in all fields!`)
    }

    const data = {
        [event.target.elements.email.name]: email.value,
        [event.target.elements.password.name]: password.value
    }

    console.log(data)
    loginFormRef.reset()
}


loginFormRef.addEventListener('submit', onSumbitHandler)
