import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@base/component/Router/Layout'
import Main from '@vin/page/Main';
import VehicleVariables from '@vin/page/VehicleVariables';

import { isEmpty } from '@base/helper/common';
import { useInitApp } from '@base/hook/useInitApp';

const RouteComponent = ({ colors, dispatch }) => {
    useInitApp({ dispatch });

    if (isEmpty(colors)) {
        return null;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout showTabs={true} />}>
                    <Route index element={<Main />} />
                    <Route path={'/variables'} element={<VehicleVariables />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;