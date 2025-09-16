export function validateStringLength(string, min, max) {
  if (string.length >= min && string.length <= max) {
    return true
  } else {
    return false
  }
}
