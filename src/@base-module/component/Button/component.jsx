import React from 'react';
import './index.css';

const Button = ({
    colors,
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
            className={disabled ? 'disabled-button-content' : 'button-content'}
            style={{
                color: colors.button[disabled ? 'disabledText' : 'text'],
                borderColor: colors.button[disabled ? 'disabledBorder' : 'border'],
                background: colors.button[disabled ? 'disabledBackground' : 'background'],
                ...style
            }}
            disabled={disabled}
            onClick={handleClick}
        >
            {name}
        </button>
    );
}

export default Button;