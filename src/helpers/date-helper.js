export function validateMinimunAgeBrazil(date) {
  const formatDate = date.split('/')
  const currentDate = new Date()
  const yearBirth = new Date(formatDate).getFullYear()
  const monthBirth = new Date(formatDate).getMonth()
  const dayBirth = new Date(formatDate).getDate()
  const differenceAge = currentDate.getFullYear() - yearBirth

  return (
    differenceAge >= 18 &&
    currentDate.getMonth() + 1 >= monthBirth &&
    currentDate.getDate() >= dayBirth
  )
}
