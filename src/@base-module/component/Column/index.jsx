import React, { forwardRef } from 'react';


const Column = forwardRef(({
    children,
    id,
    count,
    h,
    horizontalAlign,
    verticalAlign,
    className,
    style = {},
    onClick,
    onMouseEnter,
    onMouseLeave,
}, ref) => {

    return (
        <div
            ref={ref}
            id={id}
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                display: 'flex',
                alignItems: horizontalAlign ?? 'start',
                flexDirection: 'column',
                justifyContent: verticalAlign,
                width: (1200 / count) + '%',
                height: h ?? '100%',
                ...style
            }}
        >
            {children}
        </div>
    )
})

export default Column;
