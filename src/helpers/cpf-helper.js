export function validateValidCpf(cpf) {
  cpf = cpf.replace(/\D/g, '')

  if (cpf.length !== 11) {
    return false
  }

  function validateCheckDigit(cpf) {
    let sum = 0

    for (let i = 0; i < cpf.length; i++) {
      let actualDigit = cpf.charAt(i)
      let constant = cpf.length + 1 - i
      sum += Number(actualDigit) * constant
    }
    const rest = sum % 11
    return rest < 2 ? '0' : (11 - rest).toString()
  }

  let firstCheckDigit = validateCheckDigit(cpf.substring(0, 9))
  let secondCheckDigit = validateCheckDigit(cpf.substring(0, 9) + firstCheckDigit)

  let correctCpf = cpf.substring(0, 9) + firstCheckDigit + secondCheckDigit
  if (cpf !== correctCpf) {
    return false
  } else {
    return true
  }
}
