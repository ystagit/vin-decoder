import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@vin/page/Main';
import VehicleVariables from '@vin/page/VehicleVariables';

const RouteComponent = () => {

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