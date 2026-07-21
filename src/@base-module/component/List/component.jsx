import React from 'react';
import Button from '@base/component/Button';

import './index.css';

const ListComponent = ({
    colors,
    selected,
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
                    className={`list-item
                        ${(index % 2) === 0 && 'grey-list-item'}
                        ${selected === index && 'selected-list-item'}`}
                    style={{
                        color: colors.list.text,
                        '--hover-list-item': colors.list.hover,
                        '--selected-list-item': colors.list.selected
                    }}
                    key={'list-item: ' + index}
                    onClick={() => onClick(item, index)}
                >
                    <div style={
                        typeof item === 'string' && { padding: '10px 15px 10px 15px' }
                    } >
                        {item}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListComponent;