const buttonIncrementRef = document.querySelector('button[data-action = "increment"]');
const buttonDecrementRef = document.querySelector('button[data-action = "decrement"]');
const result = document.querySelector("#value");

let counterValue = 0;

const onIncrementButtonClick = () =>{result.textContent = counterValue += 1}
const onDecrementButtonClick = () => {result.textContent = counterValue -= 1};

buttonDecrementRef.addEventListener("click", onDecrementButtonClick)
buttonIncrementRef.addEventListener("click", onIncrementButtonClick)
