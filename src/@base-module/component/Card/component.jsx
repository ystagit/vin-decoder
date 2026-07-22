import React from 'react';
import Button from '@base/component/Button';

import './index.css';

const Card = ({
    colors,
    children,
    iconName = null,
    title = null,
    buttonName = null,
    onPress
}) => {
    return (
        <div
            className={'card-container'}
            style={{ borderColor: colors.card.border }}
        >
            {title &&
                <div
                    className={'card-title'}
                    style={{
                        color: colors.card.title,
                        borderColor: colors.card.titleBorder,
                        background: colors.card.titleBackground,
                    }}
                >
                    {title}
                </div>
            }
            <div className={'card-content'}>
                {children}
            </div>
            {onPress ? (
                <div className={'card-bottom'}>
                    <Button
                        name={buttonName ?? 'OK'}
                        style={{
                            color: colors.card.button,
                            borderColor: colors.card.button
                        }}
                        onClick={onPress} />
                </div>
                ) : (
                    <div className={'card-bottom'} />
                )
            }
        </div>
    )
}

export default Card;