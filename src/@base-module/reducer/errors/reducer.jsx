import { VALIDATOR } from './constants'

const errors = (errors = {}, action) => {

    switch (action.type) {
        case VALIDATOR.ERRORS.RETURN:
            return {
                ...action.errors
            }
    }

    return errors
}

export default errors