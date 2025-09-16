import { validateStringLength } from './string-helper'

export function validatePasswordLength(password) {
  const passwordRegex = /(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
  if (passwordRegex.test(password) && validateStringLength(password)) {
    return true
  } else {
    return false
  }
}
