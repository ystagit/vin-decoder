import React from 'react';
import Row from '@base/component/Row';
import Input from '@base/component/Input';
import Button from '@base/component/Button';

const MainComponent = ({ decodeVin, onGetDecodeVIN }) => {
    const [vinCode, setVinCode] = React.useState('');

    React.useEffect(() => {
        setVinCode('1FTFW1CT5DFC10312');
    }, [])

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
            <div>VIN Decoder</div>
            <ul>
                {decodeVin?.map(item => (
                    <li key={item.VariableId}>
                        <b>{item.Variable}</b>: {item.Value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MainComponent;