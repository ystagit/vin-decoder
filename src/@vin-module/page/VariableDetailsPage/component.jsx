import React from 'react';
import Table from '@base/component/Table';

import { isEmptyArray } from '@base/helper/common';
import { useParams } from 'react-router-dom';


const VariableDetailsPageComponent = ({
    variableDetails,
    onGetVariableDetails
}) => {
    const [ headers, setHeaders ] = React.useState([]);
    const [ result, setResult ] = React.useState([]);
    const { variableId } = useParams();

    React.useEffect(() => {
        onGetVariableDetails(variableId);
    }, []);

    React.useEffect(() => {
        if (isEmptyArray(variableDetails)) {
            setResult([]);
        } else {
            setHeaders([ variableDetails[0].ElementName ]);
            setResult(variableDetails.map((o) => [o.Name, o.Id]));
        }
    }, [variableDetails]);

    return (
        <Table
            headers={headers}
            items={result}
            options={{ columnWidth: ['100%'] }}
        />
    )
}

export default VariableDetailsPageComponent;