import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';

function SelectInput({ selected, items, setValue }) {
  const DEFAULT_CLASS = 'dropdown-select';
  const DESABLED_SELECT = 'disabled-select';

  return (
    <section className="dropdown">
      <div
        className={ !items.length
          ? `${DESABLED_SELECT} ${DEFAULT_CLASS}` : DEFAULT_CLASS }
      >
        <span className="select">{ selected }</span>
        <FiChevronDown />
      </div>

      <div className="dropdown-list">
        { items.map((item) => (
          <div
            key={ item }
            aria-hidden="true"
            value={ item }
            className="dropdown-list__item"
            onClick={ () => setValue(item) }
            onKeyDown={ () => setValue(item) }
          >
            { item }
          </div>
        )) }
      </div>
    </section>
  );
}

SelectInput.propTypes = {
  column: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
  setValue: PropTypes.func,
}.isRequired;

export default SelectInput;
