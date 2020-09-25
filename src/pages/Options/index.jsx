import React from 'react';
import { render } from 'react-dom';

import Options from './components/Options';
import './index.scss';

render(<Options />, window.document.querySelector('#app-container'));
