import React from 'react';
import Button from '@base/component/Button';
import Divider from '@base/component/Divider';

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
                        ${selected === index && 'selected-list-item'}`}
                    style={{
                        color: selected === index ? colors.list.selectedText : colors.list.text,
                        '--hover-list-item-color': colors.list.hover,
                        '--selected-list-item-color': colors.list.selected
                    }}
                    key={'list-item: ' + index}
                    onClick={() => onClick(item, index)}
                >
                    <div style={
                        typeof item === 'string' && { padding: '11px' }
                    } >
                        {item}
                    </div>
                    {items.length-1 !== index &&
                        <Divider
                            width={'80%'}
                            align={'center'} />
                    }
                </div>
            ))}
        </div>
    )
}

export default ListComponent;