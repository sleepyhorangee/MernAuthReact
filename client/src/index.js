import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Start />, document.getElementById('root'));
registerServiceWorker();
