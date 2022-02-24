import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';

function Filters() {
  const {
    filterByName: { name },
    setFilterByName,
    setFilterByNumericValues,
  } = useContext(MyContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const setFilter = () => {
    const options = {
      column,
      comparison,
      value,
    };

    setFilterByNumericValues([options]);
  };

  return (
    <section className="filters">
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

      <select
        value={ column }
        name="column-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ comparison }
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value-filter"
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ setFilter }
      >
        Filter
      </button>
    </section>
  );
}

export default Filters;
