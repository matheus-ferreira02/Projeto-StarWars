function useFilter(name, data, filterByNumericValues) {
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

  return planetsFiltered;
}

export default useFilter;
