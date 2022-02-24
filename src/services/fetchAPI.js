const fetchAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const { results } = await (await fetch(url)).json();
    return results;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;
