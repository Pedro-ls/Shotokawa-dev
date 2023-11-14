import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';

import './styles/global.css';
import { Providers } from './providers';
import ReactModal from 'react-modal';

const main = () => {
    const documentRoot = document.getElementById('root');
    ReactModal.setAppElement('#root');
    document.getElementsByTagName('body')[0].style.backgroundColor = '#231F20';
    return ReactDOM.createRoot(documentRoot);
};

// render REACTROOT
main().render(
    <React.StrictMode>
        <Providers>
            <Routes />
        </Providers>
    </React.StrictMode>
);
