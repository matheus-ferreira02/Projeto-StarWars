import React from 'react';
import Filters from './components/Filters/Filters';
import Table from './components/Table/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Filters />
      <Table />
    </MyProvider>
  );
}

export default App;
