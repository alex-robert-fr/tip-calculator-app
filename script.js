const billInput = document.getElementsByName('bill')[0]
const billError = document.querySelector('#bill > span.textError')

const fieldVerification = (input) => {
  return parseInt(input)
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
