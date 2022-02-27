import React, { useEffect, useContext } from 'react';
import MyContext from '../../context/MyContext';
import Filter from '../../helpers/filters';
import Filters from '../Filters/Filters';
import Loading from '../Loading/Loading';
import './style.css';

function Table() {
  const {
    data,
    getAPI,
    filterByName: { name },
    setPlanetsFiltered,
    planetsFiltered,
    loading,
    filterByNumericValues,
    order,
  } = useContext(MyContext);

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    const planets = Filter(name, data, filterByNumericValues, order);
    setPlanetsFiltered(planets);
  }, [loading, name, filterByNumericValues, order]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="main-container">
      <Filters />
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
              <td data-testid="planet-name">{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td><a target="_blank" rel="noreferrer" href={ item.films }>LINK</a></td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td><a target="_blank" rel="noreferrer" href={ item.url }>LINK</a></td>
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  );
}

export default Table;
