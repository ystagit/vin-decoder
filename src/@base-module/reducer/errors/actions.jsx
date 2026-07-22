import { VALIDATOR } from './constants'

export const validateField = (name, props) => {
    return { type: VALIDATOR.VALIDATE.FIELD, name, props }
}

export const removeErrors = () => {
    return { type: VALIDATOR.ERRORS.REMOVE }
}

export const returnErrors = (errors) => {
    return { type: VALIDATOR.ERRORS.RETURN, errors }
}