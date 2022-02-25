function useFilter(name, data, filterByNumericValues, order) {
  let planetsFiltered = name.length !== 0
    ? data.filter((planet) => planet.name.includes(name))
    : data;

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        planetsFiltered = planetsFiltered
          .filter((planet) => (
            planet[filter
              .column] > Number(filter.value)
          ));
        break;
      case 'menor que':
        planetsFiltered = planetsFiltered
          .filter((planet) => (
            planet[filter
              .column] < Number(filter.value)
          ));
        break;
      case 'igual a':
        planetsFiltered = planetsFiltered
          .filter((planet) => (
            planet[filter
              .column] === filter.value
          ));
        break;
      default:
        return planetsFiltered;
      }
    });
  }

  switch (order.sort) {
  case 'ASC':
    planetsFiltered.sort((a, b) => a[order.column] - b[order.column]);
    return planetsFiltered;
  case 'DESC':
    planetsFiltered.sort((a, b) => b[order.column] - a[order.column]);
    return planetsFiltered;
  default:
    return planetsFiltered;
  }
}

export default useFilter;
