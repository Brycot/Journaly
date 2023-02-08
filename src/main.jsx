import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalyApp } from './JournalyApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <JournalyApp />
        </BrowserRouter>
    </React.StrictMode>
);
