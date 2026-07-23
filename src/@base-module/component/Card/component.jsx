import React from 'react';
import Button from '@base/component/Button';

import { isEmpty } from '@base/helper/common';

import './index.css';

const Card = ({
    colors,
    needValidate = false,
    errors,
    children,
    iconName = null,
    title = null,
    buttonName = null,
    onPress
}) => {
    const [hasErrors, setHasErrors] = React.useState(false);

    React.useEffect(() => {
        setHasErrors(needValidate && !isEmpty(errors));
    }, [errors]);

    const handlePress = () => {
        if (!onPress) { return; }

        if (needValidate) {
            !hasErrors && onPress();
        } else {
            onPress();
        }
    }

    return (
        <div
            className={'card-container'}
            style={{
                borderColor: colors.card.border,
                '--background-card-color': colors.card.background,
            }}
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
            {onPress
                ? (
                    <div className={'card-bottom'}>
                        <Button
                            disabled={hasErrors}
                            name={buttonName ?? 'OK'}
                            onClick={handlePress} />
                    </div>
                ) : (
                    <div className={'card-bottom'} />
                )
            }
        </div>
    )
}

export default Card;