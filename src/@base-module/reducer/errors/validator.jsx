import { isEmptyString } from '@base/helper/common';

const vinCode = ({ value }, errors) => {
    if (isEmptyString(value)) {
        errors['vinCode'] = 'VIN-code is an empty';
    } else if (value.length > 17) {
        errors['vinCode'] = 'Maximum 17 characters'
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errors['vinCode'] = 'Contains forbidden characters';
    }
}

const validators = {
    vinCode
}

export const validateOne = (name, props, errors) => {
    const validator = validators[name];
    if (!validator) {
        console.warn("Validator :: Not found field's validator by name: ", name)
        return;
    }

    validator(props, errors);
}