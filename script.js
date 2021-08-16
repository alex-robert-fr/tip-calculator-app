const billInput = document.getElementsByName('bill')[0]
const billError = document.querySelector('#bill > span.textError')
const peopleInput = document.getElementsByName('people')[0]
const peopleError = document.querySelector('#people > span.textError')
const tip5 = document.getElementById('tip5')
const tip10 = document.getElementById('tip10')
const tip15 = document.getElementById('tip15')
const tip25 = document.getElementById('tip25')
const tip50 = document.getElementById('tip50')
// const tip5 = document.getElementsByClassName('5')[0]
// const tip10 = document.getElementsByClassName('10')[0]
// const tip15 = document.getElementsByClassName('15')[0]
// const tip25 = document.getElementsByClassName('25')[0]
// const tip50 = document.getElementsByClassName('50')[0]

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

const tipClick = (tip) => {
  tip.addEventListener('click', () => {
    console.log('Click !')
    const id = tip.getAttribute('id')
    const label = document.querySelector(`label[for=${id}]`)
    console.log(label)
    console.log(tip.checked)
    if (tip.checked) {
      console.log('Checked')
      label.classList.add('check')
      const tipAll = [tip5, tip10, tip15, tip25, tip50]
      for (const unique of tipAll) {
        const tipID = unique.getAttribute('id')
        const tipLabel = document.querySelector(`label[for=${tipID}]`)
        if (tipLabel !== label) {
          tipLabel.classList.remove('check')
        }
      }
    } else {
    }
  })
}

field(billInput, billError)
field(peopleInput, peopleError)

tipClick(tip5)
tipClick(tip10)
tipClick(tip15)
tipClick(tip25)
tipClick(tip50)

module.exports = {
  fieldVerification
}
