import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Leaderboard from './Leaderboard.js'

ReactDOM.render(<Leaderboard />, document.getElementById('root'));
registerServiceWorker();
