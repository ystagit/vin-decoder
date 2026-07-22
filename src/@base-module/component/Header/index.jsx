import React from 'react';
import Row from '@base/component/Row';
import Column from '@base/component/Column';
import Icon from '@base/component/Icon';
import IconButton from '@base/component/IconButton';
import Logo from '@base/component/Header/Logo';
import TabList from '@base/component/Header/TabList';

import './index.css';

const Header = () => {

    return (
        <Row verticalAlign={'center'} className={'header-container'}>
            <Column horizontalAlign={'center'} count={9}>
                <Logo />
            </Column>
            <Column horizontalAlign={'start'} count={1}>
                <TabList />
            </Column>
        </Row>
)
}

export default Header
