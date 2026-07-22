import { NavLink } from 'react-router-dom';

import './index.css';


const TabListComponent = ({ colors, tabs }) => {

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
                    {tab.label}
                </NavLink>
            ))}
        </div>
    )
}

export default TabListComponent;