import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import MyContext from '../../context/MyContext';
import FIlterOrder from '../FilterOrder/FIlterOrder';
import RemoveFilters from '../RemoveFilters/RemoveFilters';
import SelectInput from '../SelectInput/SelectInput';
import './style.css';

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
      <section className="main-filter">
        <div htmlFor="inputName" className="search-box">
          <div className="searchIcon"><AiOutlineSearch /></div>
          <input
            className="input-search"
            data-testid="name-filter"
            value={ name }
            onChange={ handleChange }
            type="text"
            placeholder="Search Name"
          />
        </div>
        <section className="select-container">
          <span className="label-input">Column</span>
          <SelectInput
            selected={ column }
            items={ composeColumns }
            setValue={ setColumn }
          />
        </section>

        <section className="select-container">
          <span className="label-input">Comparison</span>
          <SelectInput
            selected={ comparison }
            items={ ['maior que', 'menor que', 'igual a'] }
            setValue={ setComparison }
          />
        </section>

        {/* <select
          value={ comparison }
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select> */}

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

      <FIlterOrder />
      <RemoveFilters />
    </section>
  );
}

export default Filters;
