import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@vin/page/Main';

const RouteComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} >
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;