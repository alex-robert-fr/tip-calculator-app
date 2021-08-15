const app = require('../script')

describe('Field verification', () => {
  it('Sould return number', () => {
    expect(app.fieldVerification('1234')).not.toBeNaN()
  })
  it('Sould return NaN', () => {
    expect(app.fieldVerification('Test')).toBeNaN()
  })
})