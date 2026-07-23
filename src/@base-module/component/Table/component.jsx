import React from 'react';
import Row from '@base/component/Row';
import IconButton from '@base/component/IconButton';
import ContentState from '@base/component/ContentState';

import { isEmptyArray, isEmptyString } from '@base/helper/common';
import './style.css';


const TableComponent = ({ colors, prefixKey, headers, items, options, onClick }) => {
    const [ columnWidth, setColumnWidth ] = React.useState([]);

    React.useEffect(() => {
        const length = headers?.length || items[0]?.length;
        if (length) {
            if (options?.columnWidth?.length === length) {
                setColumnWidth(options.columnWidth);
            } else {
                const w = (100 / length) + '%';
                setColumnWidth(headers?.map((o) => w));
            }
        }
    }, [headers]);

    return (
        <div
            className={'table-container'}
            style={{
                background: colors.table.background,
            }}
        >
            {!isEmptyArray(headers) &&
                <Row>
                    {headers?.map((item, i) => {
                        if (headers[i].includes('ICON:')) {
                            return (
                                <div
                                    key={prefixKey + '-header-' + i}
                                    className={'empty-table-header'}
                                    style={{
                                        width: columnWidth[i],
                                        '--table-border-color': colors.table.border,
                                    }}>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={prefixKey + '-header-' + i}
                                className={isEmptyString(item) ? 'empty-table-header' :  'table-header'}
                                style={columnWidth[i] ? {
                                    width: columnWidth[i],
                                    color: colors.table.header,
                                    '--table-border-color': colors.table.border,
                                } : {}}
                            >
                                {item?.toUpperCase()}
                            </div>
                        )
                    })}
                </Row>
            }
            {isEmptyArray(items) ? (
                <ContentState containerStyle={{ padding: '10px' }} title={'NO DATA'} />
            ) : items?.map((innerItems, i) => (
                <Row key={prefixKey + '-row-' + i} className={'table-row'} >
                    {headers?.map((item, j) => {
                        if (headers[j].includes('ICON:')) {
                            return (
                                <div
                                    key={prefixKey + '-column-' + j}
                                    className={'table-icon'}
                                    style={columnWidth[j] ? {
                                        width: columnWidth[j],
                                        borderWidth: i === 0 ? '0px' : '2px',
                                        '--table-border-color': colors.table.border,
                                    } : {}}
                                >
                                    <IconButton
                                        style={{ color: colors.table.icon }}
                                        name={headers[j].split(':')[1]}
                                        onClick={() => onClick({
                                            index: i,
                                            name: headers[j],
                                            result: innerItems,
                                        })} />
                                </div>
                            )
                        }

                        return (
                            <div
                                key={prefixKey + '-column-' + j}
                                className={'table-column'}
                                style={columnWidth[j] ? {
                                    width: columnWidth[j],
                                    borderWidth: i === 0 ? '0px' : '2px',
                                    color: colors.table.text,
                                    '--table-border-color': colors.table.border,
                                } : {}}
                            >
                                <div className={'table-value'}>
                                    {innerItems[j]}
                                </div>
                            </div>
                        )
                    })}
                </Row>
            ))}
        </div>
    )
}

export default React.memo(TableComponent);