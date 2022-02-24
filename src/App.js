import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <span>Hello, App!</span>
    </MyProvider>
  );
}

export default App;
