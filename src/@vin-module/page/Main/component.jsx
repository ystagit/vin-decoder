import React from 'react';
import Row from '@base/component/Row';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Card from '@base/component/Card';
import Table from '@base/component/Table';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue, isValidVariable } from '@vin/helper/utils';


const MainComponent = ({ decodeVin, onGetDecodeVIN }) => {
    const [ vinCode, setVinCode ] = React.useState('');
    const [ result, setResult ] = React.useState([]);
    const [ lastVinCodes, setLastVinCodes ] = React.useState([]);

    React.useEffect(() => {
        setVinCode('1FTFW1CT5DFC10312');
    }, [])

    React.useEffect(() => {
        if (isEmptyArray(decodeVin)) {
            setResult([]);
        } else {
            setResult(decodeVin
                .filter((o) => isValidVariable(o.Variable) && isValidValue(o.Value))
                .map((o) => [o.Variable, o.Value]));
        }
    }, [decodeVin]);

    const handleClick = () => {
        onGetDecodeVIN(vinCode);
        setLastVinCodes([ ...lastVinCodes, [vinCode] ]);
    }

    return (
        <div>
            <Row>
                <div style={{ width: '50%' }}>
                <Card
                    title={'DECODE VIN'}
                    buttonName={'DECODE'}
                    onPress={handleClick}
                >
                    <Input
                        label={'VIN-code'}
                        value={vinCode}
                        onChange={setVinCode} />
                </Card>
                </div>
                <div style={{ width: '50%' }}>
                <Card title={'LAST VIN'}>
                    <Table
                        items={lastVinCodes} />
                </Card>
                </div>
            </Row>
            <Table
                headers={['Variable', 'Value']}
                items={result}
                options={{ columnWidth: ['25%', '75%'] }} />
        </div>
    )
}

export default MainComponent;