import React from 'react';
import IconButton from '@base/component/IconButton';
import List from '@base/component/List';
import Row from '@base/component/Row';
import Divider from '@base/component/Divider';

import './index.css';


const MenuComponent = ({ colors, onSetColor }) => {
    const [shown, setShown] = React.useState(false);

    const handleSelectItem = (item, index) => {
        onSetColor(index === 0 ? 'light' : 'dark');
    }

    return (
        <>
            {shown &&
                <div
                    className={'menu-modal-container'}
                    onClick={() => setShown(false)}
                >
                    <div
                        className={'menu-container'}
                        style={{
                            background: colors.menu.background
                        }}
                    >
                        <Row
                            horizontalAlign={'center'}
                            style={{
                                padding: '10px',
                                fontWeight: 700,
                                color: colors.text,
                                background: 'rgba(255, 255, 255, 0.05)'
                            }}
                        >
                            THEMES
                        </Row>
                        <Divider />
                        <List
                            items={[ 'LIGHT', 'DARK' ]}
                            onClick={handleSelectItem} />

                    </div>
                </div>
            }
            <IconButton
                name={'MdMenu'}
                onClick={() => setShown(true)} />
        </>
    )
}

export default MenuComponent;