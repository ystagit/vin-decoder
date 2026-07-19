import React from 'react';
import './index.css';

const Button = ({
        name,
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
            className={'button-content button-primitive'}
            style={style}
            disabled={disabled}
            onClick={handleClick}
        >
            {name}
        </button>
    );
}

export default Button;