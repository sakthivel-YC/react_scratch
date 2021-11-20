import React from 'react';
import reactLogo from './../assets/react.svg';
import Alert, { toggleAlert } from './alert/Alert';

function App() {
  return (
    <>
      <h1>
        Hello React <button onClick={() => toggleAlert()}>Show Alert</button>
      </h1>
      <div className='logo_container'>
        <img src={reactLogo} />
      </div>
      <a />
      <Alert />
    </>
  );
}

export default App;
