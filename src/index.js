import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './index.css'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
ReactDOM.render(app,document.getElementById('root'))