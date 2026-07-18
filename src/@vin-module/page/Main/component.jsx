import React from 'react';

const MainComponent = ({ onGetDecodeVIN }) => {

    React.useEffect(() => {
        onGetDecodeVIN('5UXWX7C5*BA');
    }, [])

    return (
        <div>VIN Decoder</div>
    )
}

export default MainComponent;