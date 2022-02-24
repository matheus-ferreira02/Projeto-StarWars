import React, { useEffect, useContext } from 'react';
import MyContext from '../../context/MyContext';
import filter from '../../helpers/filters';

function Table() {
  const {
    data,
    getAPI,
    filterByName: { name },
    setPlanetsFiltered,
    planetsFiltered,
    loading,
  } = useContext(MyContext);

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    setPlanetsFiltered(filter(name, data));
  }, [loading, name]);

  if (loading) {
    return <span>Loading ...</span>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        { planetsFiltered?.map((item) => (
          <tr key={ item.name }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
