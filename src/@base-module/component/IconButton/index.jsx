import React from 'react';
import Icon from '@base/component/Icon';

import './index.css';


const IconButton = ({
    name,
    w = '21px',
    h = '21px',
    style = {},
    args = {},
    disabled = false,
    onClick,
}) => {

    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(args);
        }
        e.preventDefault();
    }


    return (
        <button
            className={'icon-button-content'}
            style={style}
            disabled={disabled}
            onClick={handleClick}
        >
            <Icon
                name={name}
                w={w}
                h={h} />
        </button>
    );
}

export default IconButton;
