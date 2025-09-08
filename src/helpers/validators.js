export function validateEmail(email) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/
  return emailRegex.test(email)
}

export function validateName(min, max) {
  return function (name) {
    if (name) {
      return name.length >= min && name.length <= max
    }
  }
}

export function validateDate(date) {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/

  if (!dateRegex.test(date)) return false

  const [day, month, year] = date.split('/').map(Number)
  const dateValue = new Date(year, month - 1, day)
  return (
    dateValue.getFullYear() === year &&
    dateValue.getMonth() === month - 1 &&
    dateValue.getDate() === day
  )
}

export function validatePassword(min, max) {
  return function (password) {
    if (!password) return false

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W).+$/
    return (
      passwordRegex.length >= min && passwordRegex.length <= max && passwordRegex.test(password)
    )
  }
}
