import { useNavigate } from 'react-router-dom';

import logo from '@base/assets/logo/logo.svg';
import './index.css';

const Logo = ({}) => {
    const navigate = useNavigate();

    const handleClick = () => navigate('/');

    return (
        <button
            className={'logo'}
            onClick={handleClick}
        >
            <img src={logo}
                 width={'100px'}
                 height={'45px'} />
        </button>
    )
}

export default Logo;
