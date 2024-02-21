
function totalCost(value, cost) {
    const priceTotal = document.getElementById(value)
    const price1 = parseInt(priceTotal.innerText)
    const costing = document.getElementById(cost)
    const price2 = parseInt(costing.innerText)
    

    const totalVlaue = price1 + price2
    priceTotal.innerText = totalVlaue


}




