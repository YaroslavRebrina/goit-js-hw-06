
const colorInText = document.querySelector('.color')
const changeColorButton = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickHandler = () => {
  document.body.style.backgroundColor = getRandomHexColor()
  colorInText.textContent = document.body.style.backgroundColor
}

changeColorButton.addEventListener('click', onClickHandler)

