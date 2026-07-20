import React from 'react';
import Row from '@base/component/Row';
import Column from '@base/component/Column';
import Icon from '@base/component/Icon';
import IconButton from '@base/component/IconButton';
import Logo from '@base/component/Logo';

import './index.css';

const Header = () => {

    return (
        <Row verticalAlign={'center'} className={'header-container'}>
            <Column horizontalAlign={'start'} count={2}>
                <Logo/>
            </Column>
            <Column horizontalAlign={'end'} count={2}>
                <IconButton name={'MdList'} onClick={() => {}} />
            </Column>
        </Row>
)
}

export default Header
