import React from 'react';
import './styles.css';
import Eyes from './eyes.png';

const App = () => {
  return (
    <>
      <h1>Is it working yet ?</h1>
      <img src={Eyes} alt='Eyes' width={200} height={200} />
    </>
  );
};

export default App;
