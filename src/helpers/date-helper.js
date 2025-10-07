export function validateMinimunAgeBrazil(date) {
  const inputedDate = new Date(date.split('/'))
  const currentDate = new Date()

  const yearBirth = inputedDate.getFullYear()
  const monthBirth = inputedDate.getMonth()
  const dayBirth = inputedDate.getDate()
  const age = currentDate.getFullYear() - yearBirth

  const mounthDifference = currentDate.getMonth() - monthBirth

  if (mounthDifference < 0 || (mounthDifference === 0 && currentDate.getDate() < dayBirth)) {
    age--
  }

  return age >= 18
}
