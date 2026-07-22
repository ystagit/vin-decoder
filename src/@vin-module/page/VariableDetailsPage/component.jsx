import React from 'react';
import Table from '@base/component/Table';
import ContentState from '@base/component/ContentState';

import { isEmptyArray } from '@base/helper/common';
import { useParams, useLocation } from 'react-router-dom';


const VariableDetailsPageComponent = ({
    loading,
    variableDetails,
    onGetVariableDetails,
    onClean
}) => {
    const [ headers, setHeaders ] = React.useState([]);
    const [ result, setResult ] = React.useState([]);
    const { variableId } = useParams();
    const location = useLocation();

    React.useEffect(() => {
        onGetVariableDetails(variableId);

        return () => {
            onClean();
        }
    }, []);

    React.useEffect(() => {
        const { elementName } = location.state || {};

        if (isEmptyArray(variableDetails)) {
            setHeaders([ elementName ]);
            setResult([]);
        } else {
            setHeaders([ elementName ]);
            setResult(variableDetails.map((o) => [o.Name, o.Id]));
        }
    }, [variableDetails]);

    if (loading) {
        return (
            <ContentState
                containerStyle={{ padding: '10px' }}
                title={'LOADING...'} />
        )
    }

    return (
        <Table
            headers={headers}
            items={result}
            options={{ columnWidth: ['100%'] }}
        />
    )
}

export default VariableDetailsPageComponent;