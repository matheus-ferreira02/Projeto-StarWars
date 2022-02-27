import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import SelectInput from '../SelectInput/SelectInput';
import './style.css';

function FilterOrder() {
  const { changeOrdering, columns } = useContext(MyContext);

  const [columnOrder, setColumnOrder] = useState(columns[0]);
  const [radioOrder, setRadioOrder] = useState('ASC');

  return (
    <section className="filterOrder">
      <section className="select-container-order">
        <span className="label-input">Column</span>
        <SelectInput
          selected={ columnOrder }
          items={ columns }
          setValue={ setColumnOrder }
        />
      </section>

      <section className="radio-btns">
        <input
          data-testid="column-sort-input-asc"
          className="input-radio"
          checked={ radioOrder === 'ASC' }
          id="sortASC"
          type="radio"
          value="ASC"
          name="columnSort"
          onChange={ ({ target }) => setRadioOrder(target.value) }
        />
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label htmlFor="sortASC" className="label-radio">
          Ascending
        </label>

        <input
          data-testid="column-sort-input-desc"
          className="input-radio"
          checked={ radioOrder === 'DESC' }
          id="sortDESC"
          type="radio"
          value="DESC"
          name="columnSort"
          onChange={ ({ target }) => setRadioOrder(target.value) }
        />
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label htmlFor="sortDESC" className="label-radio">
          Downward
        </label>
      </section>

      <button
        className="order-btn"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => changeOrdering(columnOrder, radioOrder) }
      >
        Order
      </button>
    </section>
  );
}

export default FilterOrder;
