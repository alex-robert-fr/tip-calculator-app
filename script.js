const billInput = document.getElementsByName('bill')[0]
const billError = document.querySelector('#bill > span.textError')
const peopleInput = document.getElementsByName('people')[0]
const peopleError = document.querySelector('#people > span.textError')
const tip5 = {
  btn: document.getElementsByName('5')[0],
  activate: false
}

const fieldVerification = (input) => {
  const number = parseInt(input)
  if (Number.isInteger(number)) {
    if (number > 999999999999) {
      return [false, number, 'Too big']
    } else if (number < 0) {
      return [false, number, 'Too little']
    } else if (number === 0) {
      return [false, number, '0 is not accept']
    } else {
      return [true, number]
    }
  } else {
    return parseInt(input)
  }
}
const field = (field, error) => {
  field.addEventListener('input', (event) => {
    const text = event.target.value
    const verif = fieldVerification(text)
    if (verif[0] === false) {
      error.innerText = verif[2]
      field.classList.add('error')
      error.style.display = 'block'
    } else {
      field.classList.remove('error')
      error.style.display = 'none'
    }
  })
}

tip5.btn.addEventListener('click', () => {
  if (tip5.activate) {
    tip5.btn.classList.remove('check')
    tip5.activate = false
  } else {
    tip5.btn.classList.add('check')
    tip5.activate = true
  }
  console.log(tip5.activate)
})

field(billInput, billError)
field(peopleInput, peopleError)

module.exports = {
  fieldVerification
}
