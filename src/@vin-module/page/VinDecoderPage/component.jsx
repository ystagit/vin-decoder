import React from 'react';
import Row from '@base/component/Row';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Card from '@base/component/Card';
import Table from '@base/component/Table';
import LastVin from '@vin/component/LastVin';
import DecodedVinResult from '@vin/component/DecodedVinResult';

import { isEmptyArray } from '@base/helper/common';
import { isValidValue, isValidVariable } from '@vin/helper/utils';


const VinDecoderPageComponent = ({
    decodeVin,
    lastThreeVinList,
    onLoad,
    onGetDecodeVIN,
}) => {
    const [ vinCode, setVinCode ] = React.useState('');
    const [ result, setResult ] = React.useState([]);

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

    const handleClickDecode = () =>
        onGetDecodeVIN(vinCode, true);

    return (
        <div>
            <Row wrap>
                <Card
                    title={'DECODE VIN'}
                    buttonName={'DECODE'}
                    needValidate
                    onPress={handleClickDecode}
                >
                    <Input
                        maxSize={17}
                        showCounter
                        name={'vinCode'}
                        label={'VIN-code'}
                        value={vinCode}
                        onChange={setVinCode} />
                </Card>
                <LastVin />
            </Row>
            <DecodedVinResult />
        </div>
    )
}

export default VinDecoderPageComponent;