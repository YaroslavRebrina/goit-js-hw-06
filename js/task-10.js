const refs = {
  inputRef: document.querySelector('[type = number]'),
  toCreateButtonRef: document.querySelector('[data-create]'),
  toDestroyButtonRef: document.querySelector('[data-destroy]'),
  boxesRef: document.querySelector('#boxes')
}

let BoxesArray = [];

const createBoxes = (amount) => {
  const amountToNumber = Number(amount)

  for (let i = 0; i < amountToNumber; i += 1) {

    const createdDiv = document.createElement('div');
    createdDiv.style.backgroundColor = getRandomHexColor();

    createdDiv.style.width = 30 + i * 10 + 'px';
    createdDiv.style.height = 30 + i * 10 + 'px';
   
    BoxesArray.push(createdDiv)
     console.log(BoxesArray)
  }

    refs.boxesRef.append(...BoxesArray);
    BoxesArray = [];

  }

const toFindAmount = (event) => {
  return createBoxes(refs.inputRef.value)
 
}

const toDestroyBoxes = () => {
  refs.boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



refs.toCreateButtonRef.addEventListener('click', toFindAmount);
refs.toDestroyButtonRef.addEventListener('click', toDestroyBoxes);





