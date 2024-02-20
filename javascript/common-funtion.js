
function ticketPrice(paren, sheetNumber, sheetPrice) {
    const prantContainer = document.createElement('div')
    prantContainer.classList.add('flex','justify-between','inter')
    const p1 = document.createElement('p')
    p1.innerText = sheetNumber ;
    const p2 = document.createElement('p')
    p2.innerText = 'economic'
    const  p3 = document.createElement('p')
    p3.innerText = sheetPrice ;
    p3.classList.add('newclass')
    prantContainer.appendChild(p1)
    prantContainer.appendChild(p2)
    prantContainer.appendChild(p3)
    paren.appendChild(prantContainer)
}


function totalPrice(elemets) {
    const totalp = document.getElementsByClassName(elemets)
    let total = 0 ;
    for(const item of totalp){
        total += parseInt(item.innerText)
    }
    return total ;
}

