const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordFormatRegex = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).*$/

const onlyNumbersRegex = /^\d+$/

export const validateEmail = (value) => {
  return emailRegex.test(String(value).toLowerCase())
}

export const passwordFormat = (value) => {
  return passwordFormatRegex.test(String(value))
}

export const onlyNumbersFormat = (value) => {
  return onlyNumbersRegex.test(String(value))
}
