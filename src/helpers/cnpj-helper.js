export function validateValidCnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g, '')

  if (cnpj.length !== 14) {
    return false
  }

  const array = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sumFirstDigit = 0
  let sumSecondDigit = 0

  const firstDigitArray = array.slice(1)

  for (let i = 0; i < 12; i++) {
    let indexCnpj = cnpj[i]

    sumFirstDigit += indexCnpj * firstDigitArray[i]
    sumSecondDigit += indexCnpj * array[i]
  }

  sumSecondDigit += Number(cnpj[12]) * array[12]

  const restOne = sumFirstDigit % 11
  const restTwo = sumSecondDigit % 11

  const restFirstCalc = restOne < 2 ? 0 : 11 - restOne
  const restSecondCalc = restTwo < 2 ? 0 : 11 - restTwo

  return restFirstCalc === Number(cnpj[12]) && restSecondCalc === Number(cnpj[13])
}
