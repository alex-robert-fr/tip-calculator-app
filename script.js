const billInput = document.getElementsByName('bill')[0]
const billError = document.querySelector('#bill > span.textError')

const fieldVerification = (input) => {
  if (Number.isInteger(input)) {
    let number = parseInt(input)
    if (number > 1000000) {
      return [false, number]
    } else if (number < 0) {
      return [false, number]
    } else if (number === 0) {
      return [false, number]
    } else {
      return [true, number]
    }
  } else {
    return parseInt(input)
  }
}

billInput.addEventListener('input', (event) => {
  const text = event.target.value
  if (text > 100000) {
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
