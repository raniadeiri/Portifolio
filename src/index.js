import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'
import {default as About} from './container/About/About'
import {default as Footer} from './container/Footer/Footer'
import {default as Skills} from './container/Skills/Skills'
import {default as Header} from './container/Header/Header'

import {default as Work} from './container/Work/Work'


ReactDom.render(<App/>, document.getElementById('root'));