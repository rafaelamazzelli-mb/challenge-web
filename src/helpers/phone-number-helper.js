export function validateBrazilianPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.replace(/\D/g, '')

  const array = []

  for (let i = 11; i <= 99; i++) {
    if (i % 10 !== 0) {
      array.push(i)
    }
  }

  const ddd = Number(phoneNumber.slice(0, 2))

  return phoneNumber.length === 11 && phoneNumber[2] === '9' && array.includes(ddd)
}
