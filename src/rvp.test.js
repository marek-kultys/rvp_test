import React from 'react';
import ReactDOM from 'react-dom';
import rvp from './rvp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<rvp />, div);
});
