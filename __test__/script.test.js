const { expect } = require('@jest/globals')
const fs = require('fs')
window.document.body.innerHTML = fs.readFileSync('./index.html')
const app = require('../script')

describe('Field verification', () => {
  it('Sould return good number', () => {
    expect(app.fieldVerification('1234')).not.toBeNaN()
  })
  it('Sould return NaN', () => {
    expect(app.fieldVerification('Test')).toBeNaN()
  })
  it('Should return false if too big', () => {
    expect(app.fieldVerification(1000000000000)).toContain(false, 1000000000000)
  })
  it('Should return false if is negatif', () => {
    expect(app.fieldVerification(-10)).toContain(false, -10)
  })
  it('Should return false if equal to 0', () => {
    expect(app.fieldVerification(0)).toContain(false, 0)
  })
})
