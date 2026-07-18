import { Provider } from 'react-redux';
import Router from '@base/component/Router';

import { createRoot } from 'react-dom/client';
import store from './store';
import './index.css';

const Main = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

createRoot(document.getElementById('root')).render(<Main />);
