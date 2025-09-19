export function validateStringLength(string, min, max) {
  return string.length >= min && string.length <= max
}
