import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/fetchAPI';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  const getAPI = async () => {
    const dataAPI = await fetchAPI();
    setData(dataAPI);
  };

  const state = {
    data,
    getAPI,
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
