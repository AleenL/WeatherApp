import React from 'react';
import ReactDOM from 'react-dom';
import ModalGallery from './Routers'
import './index.css';

import Backgorund from './Background'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Backgorund  />,
  document.getElementById('root')
);
registerServiceWorker()


