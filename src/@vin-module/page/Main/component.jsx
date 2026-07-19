import React from 'react';
import Row from '@base/component/Row';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Table from '@base/component/Table';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue } from '@vin/helper/utils';


const MainComponent = ({ decodeVin, onGetDecodeVIN }) => {
    const [ vinCode, setVinCode ] = React.useState('');
    const [ result, setResult ] = React.useState([]);

    React.useEffect(() => {
        setVinCode('1FTFW1CT5DFC10312');
    }, [])

    React.useEffect(() => {
        if (isEmptyArray(decodeVin)) {
            setResult([]);
        } else {
            setResult(decodeVin
                .filter((o) => isValidValue(o.Value))
                .map((o) => [o.Variable, o.Value]));
        }
    }, [decodeVin]);

    const handleClick = () => onGetDecodeVIN(vinCode);

    return (
        <div>
            <div>
                <Input
                    label={'VIN-code'}
                    value={vinCode}
                    onChange={setVinCode} />
                <Button
                    name={'DECODE'}
                    onClick={handleClick} />
            </div>
            <Table
                headers={['Variable', 'Value']}
                items={result}
                options={{ columnWidth: ['25%', '75%'] }} />
        </div>
    )
}

export default MainComponent;