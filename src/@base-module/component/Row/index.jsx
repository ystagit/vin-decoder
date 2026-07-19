import React, { forwardRef } from 'react';

const Row = forwardRef(({
        children,
        id,
        w,
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
                alignItems: verticalAlign ?? 'start',
                flexDirection: 'row',
                justifyContent: horizontalAlign,
                width: w,
                height: h,
                ...style
            }}
        >
            {children}
        </div>
    )
})

export default Row;
