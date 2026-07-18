import React from 'react';

const MainComponent = ({ decodeVin, onGetDecodeVIN }) => {

    React.useEffect(() => {
        onGetDecodeVIN('5UXWX7C5*BA');
    }, [])

    return (
        <div>
            <div>VIN Decoder</div>
            <div>{JSON.stringify(decodeVin)}</div>
        </div>
    )
}

export default MainComponent;