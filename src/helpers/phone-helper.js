export function validatePhoneNumber(phoneNumber) {
  phoneNumber = telephone.replace(/\D/g, '')

  if (phoneNumber.length > 11 || phoneNumber[2] !== '9') {
    return false
  } else {
    return true
  }
}
