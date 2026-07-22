import React from 'react';
import Table from '@base/component/Table';
import parse from 'html-react-parser';

import { isEmptyArray } from '@base/helper/common';
import { useNavigate } from 'react-router-dom';


const VariablesPageComponent = ({ vehicleVariables, onGetVehicleVariableList }) => {
    const [ result, setResult ] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        onGetVehicleVariableList();
    }, []);

    React.useEffect(() => {
        if (isEmptyArray(vehicleVariables)) {
            setResult([]);
        } else {
            setResult(vehicleVariables.map((o) => [o.ID, o.Name, parse(o.Description) ?? '']));
        }
    }, [vehicleVariables]);

    const handleOpenVariableDetails = ({ value }) => {
        navigate(`/variables/${value}`);
    }

    return (
        <Table
            headers={['ICON:MdReadMore', 'Name', 'Description']}
            items={result}
            options={{ columnWidth: ['5%', '25%', '70%'] }}
            onClick={handleOpenVariableDetails}
        />
    )
}

export default VariablesPageComponent;