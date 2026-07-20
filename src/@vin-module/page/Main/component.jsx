import React from 'react';
import Row from '@base/component/Row';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Card from '@base/component/Card';
import Table from '@base/component/Table';
import List from '@base/component/List';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue, isValidVariable } from '@vin/helper/utils';


const MainComponent = ({
    decodeVin,
    lastThreeVinList,
    onLoad,
    onGetDecodeVIN,
}) => {
    const [ vinCode, setVinCode ] = React.useState('');
    const [ result, setResult ] = React.useState([]);
    const [ lastVinCodes, setLastVinCodes ] = React.useState([]);

    React.useEffect(() => {
        onLoad();
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

    const handleClick = (code) =>
        onGetDecodeVIN(code);

    return (
        <div>
            <Row wrap>
                <Card
                    title={'DECODE VIN'}
                    buttonName={'DECODE'}
                    onPress={() => handleClick(vinCode)}
                >
                    <Input
                        label={'VIN-code'}
                        value={vinCode}
                        onChange={setVinCode} />
                </Card>
                <Card title={'LAST VIN'}>
                    <List
                        items={lastThreeVinList}
                        onClick={handleClick} />
                </Card>
            </Row>
            <Table
                headers={['Variable', 'Value']}
                items={result}
                options={{ columnWidth: ['25%', '75%'] }} />
        </div>
    )
}

export default MainComponent;