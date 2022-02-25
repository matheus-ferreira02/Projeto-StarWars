import filterByOptions from './filterByOptions';
import filterByOrder from './sortOrder';
import filterByName from './filterByName';

const filters = (name, data, filterByNumericValues, order) => {
  let planetsFiltered = filterByName(name, data);
  planetsFiltered = filterByOrder(order, planetsFiltered);
  planetsFiltered = filterByOptions(filterByNumericValues, planetsFiltered);

  return planetsFiltered;
};

export default filters;
