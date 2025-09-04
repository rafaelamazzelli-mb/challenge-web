export function validationForInputEmail(email) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/
  return emailRegex.test(email)
}

export function validationForInputCpf(cpf) {
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  return cpfRegex.test(cpf)
}

export function validationForInputCnpj(cnpj) {
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
  return cnpjRegex.test(cnpj)
}

export function validationForInputName(name) {
  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/
  return nameRegex.test(name)
}

export function validationForInputTelephone(number) {
  const numberRegex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/
  return numberRegex.test(number)
}

export function validationForInputPassword(password) {
  if (password.length < 8) return false

  const charactersRegex = password.match(/[^A-Za-z0-9]/g)
  return charactersRegex && charactersRegex.length >= 2
}

export function validationForInputDate(date) {
  const dateRegex = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/
  return dateRegex.test(date)
}
