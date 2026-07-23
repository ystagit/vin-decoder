import React from 'react';

import { initColor } from '@base/reducer/colors/actions';

export const useInitApp = ({ dispatch }) => {
    React.useEffect(() => {
        dispatch(initColor());
    }, []);
}