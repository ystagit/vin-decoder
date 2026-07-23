import React from 'react';
import Table from '@base/component/Table';
import ContentState from '@base/component/ContentState';

import parse from 'html-react-parser';
import { isEmpty, isEmptyArray } from '@base/helper/common';
import { useParams, useLocation } from 'react-router-dom';


const VariableDetailsPageComponent = ({
    loading,
    vehicleVariables,
    variableDetails,
    onGetVehicleVariableList,
    onGetVariableDetails,
    onClean
}) => {
    const [ headers, setHeaders ] = React.useState([]);
    const [ details, setDetails ] = React.useState([]);
    const [ result, setResult ] = React.useState([]);
    const { variableId } = useParams();
    const location = useLocation();

    React.useEffect(() => {
        if (isEmpty(vehicleVariables)) {
            onGetVehicleVariableList();
        }

        onGetVariableDetails(variableId);

        return () => {
            onClean();
        }
    }, []);

    React.useEffect(() => {
        const variable = vehicleVariables?.find((variable) => variable.ID == variableId);
        const details = variable ? [
            ['Type', variable['DataType']],
            ['Name', variable['Name']],
            ['Group Name', variable['GroupName']],
            ['Description', parse(variable['Description'])],
        ] : [];

        setDetails(details);
    }, [vehicleVariables])

    React.useEffect(() => {
        const { elementName } = location.state || {};

        if (isEmptyArray(variableDetails)) {
            setHeaders([ elementName ?? 'NO NAME' ]);
            setResult([]);
        } else {
            setHeaders([ elementName ?? 'NO NAME' ]);
            setResult(variableDetails.map((o) => [o.Name, o.Id]));
        }
    }, [variableDetails]);

    const DetailsTable = React.useCallback(() => (
        isEmptyArray(details) ? null :
            <Table
                prefixKey={'details'}
                headers={['Details', '']}
                items={details}
                options={{ columnWidth: ['10%', '90%'] }}
            />
    ), [details]);

    if (loading) {
        return (
            <>
                <DetailsTable />
                <ContentState
                    containerStyle={{ padding: '10px' }}
                    title={'LOADING...'} />
            </>
        )
    }

    return (
        <>
            <DetailsTable />
            <Table
                prefixKey={'t1'}
                headers={headers}
                items={result}
                options={{ columnWidth: ['100%'] }}
            />
        </>
    )
}

export default VariableDetailsPageComponent;