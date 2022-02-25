function sortAscending(column, planetsFiltered) {
  return planetsFiltered.sort((a, b) => a[column] - b[column]);
}

function sortDescending(column, planetsFiltered) {
  return planetsFiltered.sort((a, b) => b[column] - a[column]);
}

function sortAlphabetically(__column, planetsFiltered) {
  return planetsFiltered.sort((a, b) => a.name.localeCompare(b.name));
}

function filterByOrder({ sort, column }, planetsFiltered) {
  const options = {
    ASC: sortAscending,
    DESC: sortDescending,
    NAME: sortAlphabetically,
  };

  return options[sort](column, planetsFiltered);
}

export default filterByOrder;
