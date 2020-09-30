import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

import '../node_modules/materialize-css/dist/js/materialize';
import M from '../node_modules/materialize-css/dist/js/materialize';


ReactDom.render(<App />, document.getElementById('root'));
M.AutoInit();