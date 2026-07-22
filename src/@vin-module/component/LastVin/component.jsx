import React from 'react';
import Card from '@base/component/Card';
import List from '@base/component/List';
import ContentState from '@base/component/ContentState';

import { isEmptyArray } from '@base/helper/common';


const LastVinComponent = ({
    lastThreeVinList,
    onGetDecodeVIN
}) => {
    lastThreeVinList = [];
    const [selected, setSelected] = React.useState(null);

    const handleClickLastVin = (code, index) => {
        setSelected(index);
        onGetDecodeVIN(code, false);
    }

    return (
        <Card title={'LAST 3 VINs'}>
            {isEmptyArray(lastThreeVinList) ? (
                <ContentState title={'NO DATA'} />
            ) : (
                <List
                    selected={selected}
                    items={lastThreeVinList}
                    onClick={handleClickLastVin} />
            )}
        </Card>
    )

}

export default LastVinComponent;