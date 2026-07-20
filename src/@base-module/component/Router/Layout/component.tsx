import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@base/component/Header';

import './index.css';

const LayoutComponent = () => {
    return (
        <div>
            <div
                className={'layout-container'}>
                <nav className={'header-wrapper'}>
                    <Header />
                </nav>
                <div
                    className={'body-context'}
                >
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutComponent;
