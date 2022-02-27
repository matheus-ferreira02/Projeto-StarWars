function filterLarger(planets, column, value) {
  return planets.filter((planet) => planet[column] > Number(value));
}

function filterSmaller(planets, column, value) {
  return planets.filter((planet) => planet[column] < Number(value));
}

function filterEqualTo(planets, column, value) {
  return planets.filter((planet) => planet[column] === value);
}

function filterByOptions(filterByNumericValues, planetsFiltered) {
  let planets = [...planetsFiltered];
  const filters = {
    'bigger then': filterLarger,
    'less than': filterSmaller,
    'equal to': filterEqualTo,
  };

  filterByNumericValues.forEach(({ comparison, column, value }) => {
    planets = filters[comparison](planets, column, value);
  });

  return planets;
}

export default filterByOptions;
