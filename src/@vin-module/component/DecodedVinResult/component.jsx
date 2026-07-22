import React from 'react';
import Card from '@base/component/Card';
import Table from '@base/component/Table';
import ContentState from '@base/component/ContentState';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue, isValidVariable } from '@vin/helper/utils';


const DecodedVinResultComponent = ({
    loading,
    decodeVin
}) => {
    const [ result, setResult ] = React.useState([]);

    React.useEffect(() => {
        if (isEmptyArray(decodeVin)) {
            setResult([]);
        } else {
            setResult(decodeVin
                .filter((o) => isValidVariable(o.Variable) && isValidValue(o.Value))
                .map((o) => [o.Variable, o.Value]));
        }
    }, [decodeVin]);

    return (
        <Card
            title={'DECODED VIN RESULT'}
        >
            {loading ? (
                <ContentState title={'LOADING...'} />
            ) : isEmptyArray(result) ? (
                <ContentState title={'NO DATA'} />
            ) : (
                <Table
                    headers={['Variable', 'Value']}
                    items={result}
                    options={{ columnWidth: ['25%', '75%'] }} />
            )}
        </Card>
    )
}

export default DecodedVinResultComponent;