export function cpfMask(cpf) {
  cpf = String(cpf).replace(/\D/g, '').slice(0, 11)
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export function cnpjMask(cnpj) {
  cnpj = String(cnpj).replace(/\D/g, '').slice(0, 14)
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export function dateMask(date) {
  date = String(date).replace(/\D/g, '').slice(0, 8)
  return date.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
}

export function maskBrazilianPhoneNumber(phoneNumber) {
  phoneNumber = String(phoneNumber).replace(/\D/g, '').slice(0, 12)
  return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}
