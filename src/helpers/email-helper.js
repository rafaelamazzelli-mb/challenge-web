export function validateEmail(email) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/
  return emailRegex.test(email)
}
