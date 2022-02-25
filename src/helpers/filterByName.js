function filterByName(name, data) {
  const planets = [...data];
  const planetsFiltered = name.length !== 0
    ? planets.filter((planet) => planet.name.includes(name))
    : planets;

  return planetsFiltered;
}

export default filterByName;
