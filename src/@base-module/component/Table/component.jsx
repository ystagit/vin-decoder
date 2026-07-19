import React from 'react';
import Row from '@base/component/Row';

import { isEmptyArray } from '@base/helper/common';
import './style.css';


const TableComponent = ({ colors, headers, items, options }) => {
    const [ columnWidth, setColumnWidth ] = React.useState([]);

    React.useEffect(() => {
        const length = headers?.length || items[0]?.length;
        if (length) {
            if (options?.columnWidth?.length === length) {
                setColumnWidth(options.columnWidth);
            } else {
                const w = (100 / length) + '%';
                setColumnWidth(items[0]?.map((o) => w));
            }
        }
    }, [items]);

    return (
        <div
            className={'table-container'}
            style={{ borderColor: colors.border }}
        >
            {!isEmptyArray(headers) &&
                <Row>
                    {headers?.map((item, i) => (
                        <div
                            key={'header-' + i}
                            className={'table-header'}
                            style={columnWidth[i] ? {
                                width: columnWidth[i],
                                color: colors.text
                            } : {}}
                        >
                            {item?.toUpperCase()}
                        </div>
                    ))}
                </Row>
            }
            {items?.map((innerItems, i) => (
                <Row key={'row-' + i} >
                    {innerItems?.map((item, j) => (
                        <div
                            key={'column-' + j}
                            className={'table-column'}
                            style={columnWidth[j] ? {
                                width: columnWidth[j],
                                'border-width': i === 0 ? '3px' : '2px',
                                color: colors.grey600
                            } : {}}
                        >
                            <div className={'table-value'}>
                                {item}
                            </div>
                        </div>
                    ))}
                </Row>
            ))}
        </div>
    )
}

export default TableComponent;