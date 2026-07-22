import { NavLink } from 'react-router-dom';
import Icon from '@base/component/Icon';
import Row from '@base/component/Row';

import { useWindowWidth } from '@base/hook/useWindowWidth';
import './index.css';


const TabListComponent = ({ colors, tabs }) => {
    const windowWidth = useWindowWidth();

    return (
        <div
            className={'tabs'}
        >
            {tabs.map((tab) => (
                <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={({ isActive }) =>
                        isActive ? 'tab active' : 'tab'
                    }
                    style={{
                        '--tab-text': colors.tab.text,
                        '--active-tab-text': colors.tab.activeText,
                        '--active-tab-border': colors.tab.activeBorder,
                        '--hover-tab-text': colors.tab.hoverText,
                        '--hover-tab-border': colors.tab.hoverBorder,
                        '--hover-tab-background': colors.tab.hoverBackground,
                    }}
                >
                    <Row>
                        {tab.iconName &&
                            <Icon
                                name={tab.iconName}
                                w={'18px'}
                                h={'18px'} />
                        }
                        {windowWidth > 600 &&
                            <span style={{ paddingLeft: '5px' }}>
                                {tab.label}
                            </span>
                        }
                    </Row>
                </NavLink>
            ))}
        </div>
    )
}

export default TabListComponent;