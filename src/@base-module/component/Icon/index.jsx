import React from 'react';
import * as md from 'react-icons/md';
import * as gi from 'react-icons/gi';
import * as fa from 'react-icons/fa';
import * as tb from 'react-icons/tb';
import * as ri from 'react-icons/ri';

const libs = {
    md,
    gi,
    fa,
    tb,
    ri
}

const Icon = ({
    lib,
    name,
    w = '30px',
    h = '30px',
    color = null,
    className = '',
    style = {},
    args = {},
    disabled = false,
    onHover,
    onBlur,
    onClick,
}) => {

    const handleHover = (e) => {
        if (e.type === 'mouseenter') {
            onHover?.();
        } else if (e.type === 'mouseleave') {
            onBlur?.();
        }
    }

    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(e, args);
        }
    }


        const libName = lib || 'md';
        const iconLib = libs[libName];
        let FoundIcon = iconLib[name || 'MdQuestionMark'];
        FoundIcon = (FoundIcon) ? FoundIcon : libs['md']['MdQuestionMark'];

        return (
            <FoundIcon
                className={className}
                style={{
                    color,
                    width: w,
                    height: h,
                    ...style,
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleClick}/>
        )


}

export default Icon;