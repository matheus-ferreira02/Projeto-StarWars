import React from 'react';
import Table from './components/Table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
