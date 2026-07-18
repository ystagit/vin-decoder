import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@base/component/Router';

import './index.css';

const Main = () => (
    <StrictMode>
        <Router />
    </StrictMode>
)

createRoot(document.getElementById('root')).render(<Main />);
