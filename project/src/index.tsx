import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root'));
