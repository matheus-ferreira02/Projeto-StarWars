import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

function Filters() {
  const { filterByName: { name }, setFilterByName } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  return (
    <label htmlFor="inputName">
      Name:
      <input
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
        type="text"
        placeholder="type the name"
      />
    </label>
  );
}

export default Filters;
