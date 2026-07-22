import { isEmptyString } from '@base/helper/common';

import './index.css';

const InputCounterComponent = ({ colors, value, maxSize }) => {

    if (maxSize === 0) {
        return null;
    }

    return (
        <div className={'input-counter-content'}>
            <span>{value?.length ?? 0} / {maxSize}</span>
        </div>
    )
}

export default InputCounterComponent;