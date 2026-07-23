import { useNavigate } from 'react-router-dom';

import LogoSVG from '@base/assets/logo/logo.svg?react';
import './index.css';

const LogoComponent = ({
    colors
}) => {
    const navigate = useNavigate();

    const handleClick = () => navigate('/');

    return (
        <button
            className={'logo'}
            onClick={handleClick}
        >
            <LogoSVG
                style={{ color: colors.logo.icon }}
                width={'75px'}
                height={'35px'} />
        </button>
    )
}

export default LogoComponent;
