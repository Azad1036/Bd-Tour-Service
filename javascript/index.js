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
const totalPrice1 = parseInt(total.innerText)


const grand = document.getElementById('grandTotal');
const grandtotal = parseInt(total.innerText)


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
    const items = totalPrice('newclass')
    total.innerText = items 
    grand.innerText = items
    }
    else{
        alert('Maximun Sheet Selected... Black e Sheet Sell Off Arekber Jodi 4 ter basi Sheet Select koro nid block kore dibo... just kiding')
    }
    
})
}

function cupponApply() {
    if (totalPrice1 === 0 ) {
        alert('Boro VHai age sheet preshage koren magna paysen je kichu na kine cuppon e click koren aber cupon e click korle apner cuppon hide kore dibo') 
    }
    else {

    }
}





