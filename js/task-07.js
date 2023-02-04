const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');



const onRangeChangeHandler = (e) => {
    if (e)
    textRef.style.fontSize = `${rangeRef.value}px`
}


rangeRef.addEventListener('input', onRangeChangeHandler)
