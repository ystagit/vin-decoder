import React from 'react';
import Card from '@base/component/Card';
import List from '@base/component/List';

const LastVinComponent = ({
    lastThreeVinList,
    onGetDecodeVIN
}) => {
    const [selected, setSelected] = React.useState(null);

    const handleClickLastVin = (code, index) => {
        setSelected(index);
        onGetDecodeVIN(code, false);
    }

    return (
        <Card title={'LAST VIN'}>
            <List
                selected={selected}
                items={lastThreeVinList}
                onClick={handleClickLastVin} />
        </Card>
    )

}

export default LastVinComponent;