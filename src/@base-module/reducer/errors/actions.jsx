import { VALIDATOR } from './constants'

export const validateField = (name, props, onPassed, onError) => {
    return { type: VALIDATOR.VALIDATE.FIELD, name, props, onPassed, onError }
}

export const removeErrors = () => {
    return { type: VALIDATOR.ERRORS.REMOVE }
}

export const returnErrors = (errors) => {
    return { type: VALIDATOR.ERRORS.RETURN, errors }
}