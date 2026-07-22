import React from 'react';
import Card from '@base/component/Card';
import Table from '@base/component/Table';
import Message from '@base/component/Message';
import ContentState from '@base/component/ContentState';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue, isValidVariable } from '@vin/helper/utils';


const DecodedVinResultComponent = ({
    loading,
    decodeVin
}) => {
    const [ message, setMessage ] = React.useState('');
    const [ result, setResult ] = React.useState([]);

    React.useEffect(() => {
        if (!decodeVin) { return; }

        if (isEmptyArray(decodeVin.results)) {
            setMessage('');
            setResult([]);
        } else {
            setMessage(decodeVin.message);
            setResult(decodeVin.results
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
                <>
                    <Message text={message} />
                    <Table
                        headers={['Variable', 'Value']}
                        items={result}
                        options={{ columnWidth: ['25%', '75%'] }} />
                </>
            )}
        </Card>
    )
}

export default DecodedVinResultComponent;