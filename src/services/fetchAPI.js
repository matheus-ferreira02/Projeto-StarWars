const fetchAPI = async () => {
  const url = 'https://star-api-wars.herokuapp.com/';
  try {
    const { results } = await (await fetch(url)).json();
    return results;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;
