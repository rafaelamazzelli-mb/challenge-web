import { validateStringLength } from './string-helper'

export function validatePasswordLength(password) {
  const passwordRegex = /(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
  return passwordRegex.test(password) && validateStringLength(password)
}
