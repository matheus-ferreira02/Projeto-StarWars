import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/fetchAPI';

function MyProvider({ children }) {
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [composeColumns, setcomposeColumns] = useState([...columns]);

  const getAPI = async () => {
    const dataAPI = await fetchAPI();
    setData(dataAPI);
    setLoading(false);
  };

  const removeColumn = (columnToRemove) => {
    const newColumns = composeColumns.filter((column) => column !== columnToRemove);
    console.log(columnToRemove);
    setcomposeColumns(newColumns);
  };

  const state = {
    data,
    filterByName,
    getAPI,
    setFilterByName,
    planetsFiltered,
    setPlanetsFiltered,
    loading,
    filterByNumericValues,
    setFilterByNumericValues,
    composeColumns,
    removeColumn,
  };

  return (
    <MyContext.Provider value={ state }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
