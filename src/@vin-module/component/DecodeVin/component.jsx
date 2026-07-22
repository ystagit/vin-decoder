import React from 'react';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Card from '@base/component/Card';


const DecodeVinComponent = ({
    decodeVin,
    onGetDecodeVIN,
}) => {
    const [ vinCode, setVinCode ] = React.useState('');

    React.useEffect(() => {
        setVinCode('1FTFW1CT5DFC10312');
    }, [])

    const handleClickDecode = () =>
        onGetDecodeVIN(vinCode, true);

    return (
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
    )
}

export default DecodeVinComponent;