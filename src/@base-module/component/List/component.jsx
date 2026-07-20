import React from 'react';
import Button from '@base/component/Button';

import './index.css';

const ListComponent = ({
    colors,
    items,
    onClick
}) => {

    return (
        <div
            className={'list-container'}
            style={{ borderColor: colors.card.border }}
        >
            {items?.map((item, index) => (
                <div
                    className={'list-item'}
                    key={'list-item: ' + index}
                    onClick={() => onClick(item, index)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default ListComponent;