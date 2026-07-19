import React from 'react';

import { setColor } from '@base/reducer/colors/actions';

export const useInitApp = ({ dispatch }) => {
    React.useEffect(() => {
        dispatch(setColor('light'));
    }, []);
}