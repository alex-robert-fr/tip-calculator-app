const billInput = document.getElementsByName('bill')[0]
const billError = document.querySelector('#bill > span.textError')

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
    console.log('test2')
    return parseInt(input)
  }
}

billInput.addEventListener('input', (event) => {
  const text = event.target.value
  const verif = fieldVerification(text)
  if (verif[0] === false) {
    billError.innerText = verif[2]
    billInput.classList.add('error')
    billError.style.display = 'block'
  } else {
    billInput.classList.remove('error')
    billError.style.display = 'none'
  }
})

module.exports = {
  fieldVerification
}
