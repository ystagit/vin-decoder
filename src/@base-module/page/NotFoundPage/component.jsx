import React from 'react';
import Row from '@base/component/Row';

import './index.css';

const NotFoundPageComponent = ({ colors, description }) => {
    return (
        <div style={{ color: colors.grey600 }} >
            <div style={{ height: '100px' }}/>
            <Row horizontalAlign={'center'}>
                <div className={'no-page-header'}>
                    404
                </div>
            </Row>
            <div style={{ height: '10px' }}/>
            <Row horizontalAlign={'center'}>
                <div className={'no-page-content'}>
                    {description ?? 'NOT FOUND PAGE'}
                </div>
            </Row>
        </div>
    )
}

export default NotFoundPageComponent;