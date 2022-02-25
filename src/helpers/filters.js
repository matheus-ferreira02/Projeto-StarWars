function filterByName(name, data) {
  const planets = [...data];
  const planetsFiltered = name.length !== 0
    ? planets.filter((planet) => planet.name.includes(name))
    : planets;

  return planetsFiltered;
}

function filterByOrder(order, planetsFiltered) {
  switch (order.sort) {
  case 'ASC':
    planetsFiltered.sort((a, b) => a[order.column] - b[order.column]);
    break;
  case 'DESC':
    planetsFiltered.sort((a, b) => b[order.column] - a[order.column]);
    break;
  case 'NAME':
    planetsFiltered.sort((a, b) => a.name.localeCompare(b.name));
    break;
  default:
    break;
  }

  return planetsFiltered;
}

function filterByOptions(filterByNumericValues, planetsFiltered) {
  let planets = [...planetsFiltered];
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        planets = planets
          .filter((planet) => (
            planet[filter
              .column] > Number(filter.value)
          ));
        break;
      case 'menor que':
        planets = planets
          .filter((planet) => (
            planet[filter
              .column] < Number(filter.value)
          ));
        break;
      case 'igual a':
        planets = planets
          .filter((planet) => (
            planet[filter
              .column] === filter.value
          ));
        break;
      default:
        break;
      }
    });
  }
  return planets;
}

const filter = (name, data, filterByNumericValues, order) => {
  let planetsFiltered = filterByName(name, data);
  planetsFiltered = filterByOrder(order, planetsFiltered);
  planetsFiltered = filterByOptions(filterByNumericValues, planetsFiltered);

  return planetsFiltered;
};

export default filter;
