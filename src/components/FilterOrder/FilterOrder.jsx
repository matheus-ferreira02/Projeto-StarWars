import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterOrder() {
  const { changeOrdering, order, columns } = useContext(MyContext);

  const [columnOrder, setColumnOrder] = useState(columns[0]);
  const [radioOrder, setRadioOrder] = useState(order.sort);

  return (
    <section className="filterOrder">
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
        onClick={ () => changeOrdering(columnOrder, radioOrder) }
      >
        order
      </button>
    </section>
  );
}

export default FilterOrder;
