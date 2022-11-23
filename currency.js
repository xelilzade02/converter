const fromCurrency = document.querySelector(".fromCurrency")
const toCurrency = document.querySelector(".toCurrency")
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const fromP = document.querySelector('.fromP')
const toP = document.querySelector('.toP')
const fromli = document.querySelectorAll('.fromCurrency li')
const toli = document.querySelectorAll('.toCurrency li')
let fr = "RUB";
let tofr = "USD";
let out;
from.addEventListener('keyup',getData)

fromCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'from-li') {
    fr = e.target.innerText
    
  }
})
toCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'to-li') {
    tofr = e.target.innerText
    
    
  }
})
function checkSelect() {
  fromli.forEach((item) => {
    item.classList.remove('selected')
    if (fr == item.innerText) {
      item.classList.add('selected')
    }
  })
  toli.forEach((item) => {
    item.classList.remove('selected')
    if (tofr == item.innerText) {
      item.classList.add('selected')
    }
  })
}


 