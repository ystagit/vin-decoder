import React from 'react';
import Input from '@base/component/Input';
import Button from '@base/component/Button';
import Card from '@base/component/Card';


const DecodeVinComponent = ({
    decodeVin,
    onValidateVinCode,
    onGetDecodeVIN,
}) => {
    const [ vinCode, setVinCode ] = React.useState('');

    React.useEffect(() => {
        setVinCode('');
    }, [])

    const handleClickDecode = () =>
        onValidateVinCode(vinCode,
            () => onGetDecodeVIN(vinCode, true))

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