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
    columnsRemoved,
    removeFilter,
    removeAllFilters,
    columns,
    setOrder,
  } = useContext(MyContext);

  const [column, setColumn] = useState(composeColumns[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [columnOrder, setColumnOrder] = useState(columns[0]);
  const [radioOrder, setRadioOrder] = useState('ASC');

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

  const removeFilterContext = ({ target }) => {
    removeFilter(target.name);
  };

  const changeOrdering = () => {
    setOrder({ column: columnOrder, sort: radioOrder });
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

      <select
        data-testid="column-sort"
        value={ columnOrder }
        onChange={ ({ target }) => setColumnOrder(target.value) }
      >
        { columns.map((item) => (
          <option value={ item } key={ item }>{ item }</option>
        )) }
      </select>

      <label htmlFor="sortASC">
        ascending
        <input
          data-testid="column-sort-input-asc"
          checked={ radioOrder === 'ASC' }
          id="sortASC"
          type="radio"
          value="ASC"
          name="columnSort"
          onChange={ ({ target }) => setRadioOrder(target.value) }
        />
      </label>

      <label htmlFor="sortDESC">
        downward
        <input
          data-testid="column-sort-input-desc"
          checked={ radioOrder === 'DESC' }
          id="sortDESC"
          type="radio"
          value="DESC"
          name="columnSort"
          onChange={ ({ target }) => setRadioOrder(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ changeOrdering }
      >
        order
      </button>

      { columnsRemoved.length && (
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeAllFilters }
        >
          Remover todas filtragens
        </button>
      ) }

      { columnsRemoved.map((item) => (
        <div data-testid="filter" key={ `${item} removed` }>
          <span>{ item }</span>
          <button
            name={ item }
            type="button"
            onClick={ removeFilterContext }
          >
            X
          </button>
        </div>
      )) }
    </section>
  );
}

export default Filters;
