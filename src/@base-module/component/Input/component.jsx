import React from 'react';
import Row from '@base/component/Row';
import InputError from '@base/component/Input/InputError';
import InputCounter from '@base/component/Input/InputCounter';
import InputType from '@base/component/Input/input-type';

import './index.css';


const InputComponent = ({
        colors,
        type = InputType.TEXT,
        args = {},
        label = '',
        value = '',
        placeholder = '',
        name = '',
        disabled = false,
        required = false,
        justLatin = false,
        showCounter = false,
        maxSize = 255,
        onValidateField,
        onChange,
        onFocus
    }) => {

    let input = null;

    const handelChange = (e) => {
        let { value } = e.target;

        if (maxSize !== 0 && value.length > maxSize) {
            value = value.substring(0, maxSize);
        }

        onValidateField({ value })
        onChange?.(value, args);
        e.preventDefault();
    }

    const handleIgnore = (e) => {

        if (e.key === 'Backspace' && !e.target.value) {
            onChange?.('', args);
            e.preventDefault();
            return;
        }

        if (justLatin && e.key.match(/[^a-z\-_]/i)) {
            e.preventDefault();
            return;
        }

        if (type === 'number' && ['e', 'E', '+', '-', '.'].includes(e.key)) {
            e.preventDefault();
            return;
        }
    }

    const handleUpdate = (e, focused) => {
        onFocus?.(focused, args);
        e.preventDefault();
    }

    const handleFocus = (e) => handleUpdate(e, true);

    const handleBlur = (e) => handleUpdate(e, false);

    return (
        <div className={'input-body'}>
            <Row verticalAlign={'center'}>
                <div
                    className={'input-container'}
                >
                    <input
                        ref={(inputRef) => {
                            input = inputRef;
                        }}
                        className={'input-content primitive-input'}
                        style={{
                            background: colors.input.background,
                            borderColor: colors.input.border,
                            color: colors.input.value,
                        }}
                        type={type || InputType.TEXT}
                        disabled={disabled}
                        value={value}
                        placeholder={placeholder}
                        onChange={handelChange}
                        onKeyDown={handleIgnore}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <div className={'input-label-content'}
                        style={{
                            top: value ? 0 : '30px',
                            color: colors.input.label
                        }}
                        onClick={() => input?.focus()}
                    >
                        <div
                            className={'input-label'}
                            style={{
                                fontSize: value ? '11px' : null,
                                fontWeight: value ? 'bold' : null,
                                color: colors.input.label
                            }}
                        >
                            {required &&
                                <span className={'required-input'}>* </span>
                            }
                            {label}
                        </div>
                    </div>
                    {showCounter &&
                        <InputCounter
                            value={value}
                            maxSize={maxSize} />
                    }
                    <InputError name={name} />
                </div>
            </Row>
        </div>
    );
}

export default InputComponent;