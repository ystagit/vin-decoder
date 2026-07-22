import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteListener from '@base/listener/RouteListener';
import Layout from '@base/component/Router/Layout';
import VinDecoderPage from '@vin/page/VinDecoderPage';
import VariablesPage from '@vin/page/VariablesPage';
import VariableDetailsPage from '@vin/page/VariableDetailsPage';

import { isEmpty } from '@base/helper/common';
import { useInitApp } from '@base/hook/useInitApp';

const RouteComponent = ({ colors, dispatch }) => {
    useInitApp({ dispatch });

    if (isEmpty(colors)) {
        return null;
    }

    return (
        <BrowserRouter>
            <RouteListener dispatch={dispatch} />
            <Routes>
                <Route path={'/'} element={<Layout showTabs={true} />}>
                    <Route index element={<VinDecoderPage />} />
                    <Route path={'/variables'} element={<VariablesPage />} />
                    <Route path="/variables/:variableId" element={<VariableDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;