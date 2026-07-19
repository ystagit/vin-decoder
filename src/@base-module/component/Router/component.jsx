import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@vin/page/Main';
import VehicleVariables from '@vin/page/VehicleVariables';

import { useInitApp } from '@base/hook/useInitApp';

const RouteComponent = ({ dispatch }) => {
    useInitApp({ dispatch });

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} >
                    <Route index element={<Main />} />
                    <Route path={'/variables'} element={<VehicleVariables />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;