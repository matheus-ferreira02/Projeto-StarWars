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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const planets = Filter(name, data, filterByNumericValues, order);
    setPlanetsFiltered(planets);
    // eslint-disable-next-line
  }, [loading, name, filterByNumericValues, order]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="main-container">
      <Filters />
      <table className="table">
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

        <tbody className="table-body">
          { planetsFiltered?.map((item) => (
            <tr key={ item.name }>
              <td data-testid="planet-name">{ item.name }</td>
              <td data-title="Rotation Period">{ item.rotation_period }</td>
              <td data-title="Orbital Period">{ item.orbital_period }</td>
              <td data-title="Diameter">{ item.diameter }</td>
              <td data-title="Climate">{ item.climate }</td>
              <td data-title="Gravity">{ item.gravity }</td>
              <td data-title="Terrain">{ item.terrain }</td>
              <td data-title="Surface Water">{ item.surface_water }</td>
              <td data-title="Population">{ item.population }</td>
              <td data-title="Films">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ item.films }
                >
                  LINK
                </a>

              </td>
              <td data-title="Created">{ item.created }</td>
              <td data-title="Edited">{ item.edited }</td>
              <td data-title="URL">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ item.url }
                >
                  LINK
                </a>

              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  );
}

export default Table;
