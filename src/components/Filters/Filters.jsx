import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../../context/MyContext';

function Filters() {
  const {
    filterByName: { name },
    setFilterByName,
    setFilterByNumericValues,
    filterByNumericValues,
    composeColumns,
    removeColumn,
  } = useContext(MyContext);

  const [column, setColumn] = useState(composeColumns[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  useEffect(() => {
    setColumn(composeColumns[0]);
  }, [composeColumns]);

  const setFilter = () => {
    const options = {
      column,
      comparison,
      value,
    };

    removeColumn(column);

    setFilterByNumericValues([...filterByNumericValues, options]);
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
        { composeColumns.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        )) }
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
        disabled={ !composeColumns.length }
      >
        Filter
      </button>
    </section>
  );
}

export default Filters;
