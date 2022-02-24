import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';

function Filters() {
  const { filterByName: { name }, setFilterByName } = useContext(MyContext);
  const [columnSelect, setColumnSelect] = useState('population');
  const [comparisonSelect, setComparisonSelect] = useState('maior que');
  const [valueInput, setValueInput] = useState('0');

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
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
        value={ columnSelect }
        name="column-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnSelect(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ comparisonSelect }
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonSelect(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value-filter"
        data-testid="value-filter"
        type="number"
        value={ valueInput }
        onChange={ ({ target }) => setValueInput(target.value) }
      />

      <button type="button" data-testid="button-filter">Filter</button>
    </section>
  );
}

export default Filters;
