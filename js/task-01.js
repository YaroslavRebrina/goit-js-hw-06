const catecoriesListRef = document.querySelectorAll("#categories ul")
const categoryNameRef = document.querySelectorAll('li.item')
const itemRef = document.querySelectorAll('.item li')

const showInfo = () => {
    console.log(`Number of categories : ${catecoriesListRef.length}`)
    Array.from(categoryNameRef).forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`)
        console.log(`Elements: ${el.lastElementChild.childElementCount}`)
    });
    
}


console.log(showInfo())


