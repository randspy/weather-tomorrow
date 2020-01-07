import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

function App() {
  const header = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '300px',
    fontSize: '24px'
  };
  return <div style={header}>Weather tomorrow is the same as today</div>;
}
ReactDOM.render(<App />, document.getElementById('root'));
