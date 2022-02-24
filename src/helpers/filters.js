function filter(name, data, filterByNumericValues) {
  const planetsFiltered = name.length !== 0
    ? data.filter((planet) => planet.name.includes(name))
    : data;

  if (filterByNumericValues.length > 0) {
    switch (filterByNumericValues[0].comparison) {
    case 'maior que':
      return planetsFiltered
        .filter((planet) => (
          planet[filterByNumericValues[0].column] > Number(filterByNumericValues[0].value)
        ));
    case 'menor que':
      return planetsFiltered
        .filter((planet) => (
          planet[filterByNumericValues[0].column] < Number(filterByNumericValues[0].value)
        ));
    case 'igual a':
      return planetsFiltered
        .filter((planet) => (
          planet[filterByNumericValues[0]
            .column] === filterByNumericValues[0].value
        ));
    default:
      return planetsFiltered;
    }
  }

  return planetsFiltered;
}

export default filter;
