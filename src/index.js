import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import axios from './axios/axiosInstance';
import Store from './store/store'



const app = (
    <Store>
        <Router>
            <App />
        </Router>
    </Store>
    
);
ReactDOM.render(app,document.getElementById('root'))