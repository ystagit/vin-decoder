import { isEmptyString } from '@base/helper/common';

import './index.css';

const InputErrorComponent = ({ colors, errorMessage }) => {

    if (isEmptyString(errorMessage)) {
        return null;
    }

    return (
        <div className={'input-error-content'}>
            <span style={{ color: colors.input.error }} >{errorMessage}</span>
        </div>
    )
}

export default InputErrorComponent;