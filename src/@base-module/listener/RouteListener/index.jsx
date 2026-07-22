import React from 'react';
import { useLocation } from 'react-router-dom';
import { removeErrors } from '@base/reducer/errors/actions';

const RouteListener = ({ dispatch }) => {
    const location = useLocation();

    React.useEffect(() => {
        dispatch(removeErrors());
    }, [location.pathname]);

    return null;
}

export default RouteListener;