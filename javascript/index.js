const booksheet = document.getElementsByClassName('book-sheat') ;

const sheet = document.getElementById('total-seats')
let convating = parseInt(sheet.innerText)

const book = document.getElementById('totalbooking')
let convatnumber = parseInt(book.innerText)

const apply = document.getElementById('disabledapply');
const push = document.getElementById('pushelements')

const price = document.getElementById('sheetPrice')
const singleprice = parseInt(price.innerText)

const total = document.getElementById('totalPrice');
const totalPrice = parseInt(total)

const grand = document.getElementById('grandTotal');
const grandtotal = parseInt(total)

for(const sheat of booksheet) {
    sheat.addEventListener('click', function(e){
    //change to bacground color and text
    if (convatnumber <4 ) {
    e.target.classList.remove('bg-[#F7F8F8]')
    e.target.classList.add('bg-[#1DD100]')
    e.target.classList.add('text-white')
    sheet.innerText = convating - 1
    book.innerText = convatnumber + 1
    convating--;
    convatnumber++;
    //Cuple apply buttom 
    if(convatnumber === 4 ){
        apply.removeAttribute('disabled')

    }
    const sheetName = e.target.innerText
    ticketPrice(push,sheetName,singleprice)
    }
    else{
        alert('Maximun Sheet Selected... Black e Sheet Sell Off Arekber Jodi 4 ter basi Sheet Select koro nid block kore dibo... just kiding')
    }
    
})
}
