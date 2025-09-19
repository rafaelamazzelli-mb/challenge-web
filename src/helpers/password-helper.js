export function validatePasswordLength(password, min, max) {
  const passwordRegex = /(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
  return passwordRegex.test(password) && password.length >= min && password.length <= max
}
