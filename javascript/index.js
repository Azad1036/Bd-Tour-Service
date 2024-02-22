
const busSheatNumber = document.getElementsByClassName('book-sheat')
//console.log(busSheatNumber)

//left Sheat Convating String To Number
const leftSheats = document.getElementById('total-seats')
let leftSheat = parseInt(leftSheats.innerText)

//Total Booking Convating String To Number
const totalBooks = document.getElementById('totalbooking')
let totalbook = parseInt(totalBooks.innerText)

//Maximum Sheat Bokking Alart
const aleats = document.getElementById('maximum-shert')

const disabledbtn = document.getElementById('disabledapply')
const disabledbtn2 = document.getElementById('next-section')


const pushelement = document.getElementById('pushelements');

const sheatPrice = document.getElementById('sheetPrice').innerText


for (const sheatnumber of busSheatNumber) {
    sheatnumber.addEventListener('click', function (e) {
        if (totalbook < 4) {
            e.target.classList.remove('bg-[#F7F8F8]')
            e.target.classList.add('bg-[#1DD100]')
            e.target.classList.add('text-white')

            //bus sheat left and add bus total booking sheat
            leftSheats.innerText = leftSheat - 1
            totalBooks.innerText = totalbook + 1
            leftSheat--;
            totalbook++;

            //cupon apply btn 
            if (totalbook === 4 ) {
                disabledbtn.removeAttribute('disabled')
            }

            //next apply btn
            // else if (totalbook === 1) {
            //     disabledbtn2.removeAttribute('disabled')
            // }

            //added customer sheet name and price
            const div = document.createElement('div');
            div.classList.add('flex')
            div.classList.add('justify-between')
            div.classList.add('inter')
            const p1 = document.createElement('p');
            p1.innerText = e.target.innerText
            const p2 = document.createElement('p');
            p2.innerText = 'Economic'
            const p3 = document.createElement('p');
            p3.innerText = sheatPrice;
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)
            pushelement.appendChild(div)

            //total Price and Grand total Price
            totalCost('totalPrice', 'sheetPrice' ,'grandTotal')
            grandTotalPrice()
            // grandTotalPrice('totalPrice','grandTotal')

        }

        else {
            aleats.classList.remove('hidden')

        }

    })

}



function grandTotalPrice(cupponCode) {
    const totals = document.getElementById('totalPrice').innerText
    if (cupponCode == undefined) {
        document.getElementById('grandTotal').innerText = totals
    }
    else{
        const cuponcods = document.getElementById('inputVlues').value
        if (cuponcods === 'NEW15') {
            const discount = totals * 15 / 100
            document.getElementById('discountPrice').innerText = discount
            document.getElementById('remove-discount').classList.remove('hidden')
            document.getElementById('grandTotal').innerText = totals - discount
            document.getElementById('inputVlues').classList.add('hidden')
            document.getElementById('disabledapply').classList.add('hidden')
           

        }
        else if (cuponcods === "Couple 20") {
            const discount = totals * 20 / 100
            document.getElementById('discountPrice').innerText = discount
            document.getElementById('remove-discount').classList.remove('hidden')
            document.getElementById('grandTotal').innerText = totals - discount
            document.getElementById('inputVlues').classList.add('hidden')
            document.getElementById('disabledapply').classList.add('hidden')
        }
        else{
            alert('দয়া করে সঠিক কুপন কোডটি দিন....')
        }
    } 
    
}
