import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import SelectInput from '../SelectInput/SelectInput';
import './style.css';

function FilterOrder() {
  const { changeOrdering, order, columns } = useContext(MyContext);

  const [columnOrder, setColumnOrder] = useState(columns[0]);
  const [radioOrder, setRadioOrder] = useState(order.sort);

  return (
    <section className="filterOrder">
      <section className="select-container">
        <span className="label-input">Column</span>
        <SelectInput
          selected={ columnOrder }
          items={ columns }
          setValue={ setColumnOrder }
        />
      </section>

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
