import React from 'react';

const VehicleVariablesComponent = ({ vehicleVariables, onGetVehicleVariableList }) => {

    React.useEffect(() => {
        onGetVehicleVariableList();
    }, []);

    return (
        <div>
            {JSON.stringify(vehicleVariables)}
        </div>
    )
}

export default VehicleVariablesComponent;