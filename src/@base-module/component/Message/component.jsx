import React from 'react';
import Row from '@base/component/Row';
import Column from '@base/component/Column';
import Icon from '@base/component/Icon';

import { isEmptyString } from '@base/helper/common';
import './index.css';


const MessageComponent = ({
    colors,
    type = 'info',
    text = null,
}) => {
    if (isEmptyString(text)) {
        return null;
    }

    return (
        <Row
            className={'message-container'}
            style={{
                color: colors.message[type].text,
                borderColor: colors.message[type].border,
                background: colors.message[type].background,
            }}
        >
            <Column
                horizontalAlign={'center'}
                count={9}
            >
                <Icon
                    name={'MdInfoOutline'}
                    w={'20px'}
                    h={'20px'} />
            </Column>
            <Column
                horizontalAlign={'start'}
                count={1}
            >
                {text}
            </Column>
        </Row>
    )
}

export default MessageComponent;