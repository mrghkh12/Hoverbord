const $ = document

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71" , "#6e5494" , "#8458B3" , "#fff685" , "#ff1d58" , " #f75990" , "#a28089"];

const squareNumber = $.getElementById('squareNumber')

const squareContainer = $.querySelector('.container')


squareNumber.addEventListener('keyup' , e => {
    squareMaker(squareNumber.value)
})


const squareMaker = (squareNumber) => {
    squareContainer.innerHTML = ''
    let i = 0
    while(i < squareNumber){
        i++
        
        let squareElem = $.createElement('div')
        squareElem.classList.add('square')

        squareElem.addEventListener('mouseover' , () => setEffectColor(squareElem))
        squareElem.addEventListener('mouseout' , () => removeEffectColor(squareElem))

        squareContainer.appendChild(squareElem)
    }
}

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const setEffectColor = (squareElem) => {
    let effectColor = randomColor()
    squareElem.style.backgroundColor = effectColor
    squareElem.style.transition = '0s'
    squareElem.style.boxShadow = `0 0 3px ${effectColor}`
}

const removeEffectColor = (squareElem) => {
    squareElem.style.backgroundColor = '#1d1d1d'
    squareElem.style.transition = '2s ease'
    squareElem.style.boxShadow = '0 0 3px #1d1d1d'
}

squareMaker(squareNumber.value)