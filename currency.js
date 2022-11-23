// const { default: imask } = require("./imask");

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
checkSelect()
from.addEventListener('keyup',getData)
to.addEventListener('keyup',getData1)
function getData() {
  fetch(`https://api.exchangerate.host/latest?base=${fr}&symbols=${tofr}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      out = Object.values(data.rates)[0];
      fromP.innerText = `1 ${fr} = ${out} ${tofr}`
      toP.innerText = `1 ${tofr} = ${1 / out} ${fr}`
      calcFrom(out)
    }
    )
}
function getData1() {
  fetch(`https://api.exchangerate.host/latest?base=${tofr}&symbols=${fr}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      out = Object.values(data.rates)[0];
      toP.innerText = `1 ${tofr} = ${out} ${fr}`
      fromP.innerText = `1 ${fr} = ${1 / out} ${tofr}`
      calcTo(out)
    }
    )
}
function calcFrom(out) {
  to.value = out * from.value
}
function calcTo(out) {
  from.value = out * to.value
}
fromCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'from-li') {
    fr = e.target.innerText
    checkSelect()
    getData()
  }
})
toCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'to-li') {
    tofr = e.target.innerText
    checkSelect()
    getData()
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

const phoneMaskSelector = '.input';
const phoneMaskInputs = document.querySelectorAll(phoneMaskSelector);

const masksOptions = {
  phone: {
    mask: '000 000 000 000 000 000 000 000 000 000 000 000 000 000'
  }
};

for(const item of phoneMaskInputs) {
  new IMask(item, masksOptions.phone);
}

// var numberMaskFrom = IMask(from, {
//   mask: Number,
//   scale: 6,
//   signed: false,
//   thousandsSeparator: " ",
//   padFractionalZeros: false,
//   normalizeZeros: true,
//   radix: ".",
//   mapToRadix: [","],
// });


// var numberMaskTo = IMask(to, {
//   mask: Number,
//   scale: 6,
//   signed: false,
//   thousandsSeparator: " ",
//   padFractionalZeros: false,
//   normalizeZeros: true,
//   radix: ".",
//   mapToRadix: [","],
// });


