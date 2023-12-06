const validateUsername = (username) => {
  if (username !== null || username !== undefined) {
    const hasUppercase = /[A-Z]/.test(username)

    // Check if the username contains a number
    const hasNumber = /\d/.test(username)

    // Check if the username is at least 5 characters long
    const isLengthValid = username.length >= 5

    // Check if the username doesn't contain special characters
    const hasSpecialCharacters = /[#$%^&*()_+!]/.test(username)

    // Check all criteria
    const isValid =
      hasUppercase && hasNumber && isLengthValid && !hasSpecialCharacters
    return isValid
  }
  return false
}

const validateEmail = (email) => {
  if (email !== null || email !== undefined) {
    const hasAtSymbol = /@/.test(email)

    // Check if the email ends with .com
    const endsWithDotCom = /.com$/.test(email)

    // Check all criteria
    const isValid = hasAtSymbol && endsWithDotCom
    return isValid
  }
  return false
}

const validatePassword = (password) => {
  if (password !== null || password !== undefined) {
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    // Check if the password contains an uppercase letter
    const hasUppercase = /[A-Z]/.test(password)

    // Check if the password contains a lowercase letter
    const hasLowercase = /[a-z]/.test(password)

    // Check if the password contains a number
    const hasNumber = /\d/.test(password)

    // Check if the password is at least 8 characters long
    const isLengthValid = password.length >= 8

    // Check all criteria
    const isValid =
      hasSpecialCharacter &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      isLengthValid
    return isValid
  }
  return false
}

export { validateEmail, validatePassword, validateUsername }
