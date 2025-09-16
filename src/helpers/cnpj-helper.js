export function validateValidCnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g, '')

  if (cnpj.length !== 14) {
    return false
  }

  function validateCheckDigit(cnpj) {
    let sum = 0
    let secondSum = 0
    const arrayFirstDigit = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const arraySecondDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    for (let i = 0; i < arrayFirstDigit.length; i++) {
      let actualDigit = cnpj.charAt(i)
      let constant = arrayFirstDigit[i]
      sum += Number(actualDigit) * constant
    }
    const rest = sum % 11
    const restCalc = (rest < 2 ? 0 : 11 - rest).toString()

    for (let i = 0; i < arraySecondDigit.length; i++) {
      let actualDigit = cnpj.charAt(i)
      let constant = arraySecondDigit[i]
      secondSum += Number(actualDigit) * constant
    }

    const restSecond = secondSum % 11
    const restSecondCalc = (restSecond < 2 ? 0 : 11 - restSecond).toString()

    let cnpjBase = cnpj.substring(0, 12)
    let correctCnpj = cnpjBase + restCalc + restSecondCalc

    if (cnpj !== correctCnpj) {
      return false
    } else {
      return true
    }
  }

  return validateCheckDigit(cnpj)
}
