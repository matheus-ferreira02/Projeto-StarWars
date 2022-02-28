import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './style.css';

function RemoveFilters() {
  const {
    columnsRemoved,
    removeFilter,
    removeAllFilters,
  } = useContext(MyContext);

  const removeFilterContext = ({ target }) => {
    removeFilter(target.name);
  };

  return (
    <section className="chosenFilters">
      { columnsRemoved.length > 0 && (
        <button
          className="remove-filters-btn"
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeAllFilters }
        >
          Remove all filters
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

export default RemoveFilters;
