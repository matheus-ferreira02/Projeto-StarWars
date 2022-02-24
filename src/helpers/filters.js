function filter(name, data) {
  const planetsFiltered = name.length !== 0
    ? data.filter((planet) => planet.name.includes(name))
    : data;

  return planetsFiltered;
}

export default filter;
