import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/fetchAPI';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAPI = async () => {
    const dataAPI = await fetchAPI();
    setData(dataAPI);
    setLoading(false);
  };

  const state = {
    data,
    filterByName,
    getAPI,
    setFilterByName,
    planetsFiltered,
    setPlanetsFiltered,
    loading,
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
