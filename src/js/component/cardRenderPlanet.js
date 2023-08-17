import React, { Component, useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardRenderPlanets = ({ planet }) => {
  const { store, actions } = useContext(Context);
  const isFavorito = store.favoritos.some(
    (favorito) => favorito === planet.name
  );

  return (
    <div className=" mx-1" style={{ width: "300px" }}>
      {store.planets.map(
        (e) =>
          e.uid === planet.uid && (
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    //   width: "400px",
                    objectFit: "fill",
                    borderRadius: "5px",
                  }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  {/* <p className="card-text">
                    <span>{e.description}</span>
                  </p> */}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    terrain: {e.properties.terrain}
                  </li>
                  <li className="list-group-item">
                    population : {e.properties.population}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                  <Link to={`/planet/${planet.uid}`}>
                    <button className="btn btn-outline-primary ">
                      Detalle
                    </button>
                  </Link>
                  <button
                    href="#"
                    className={`btn ${
                      isFavorito ? "btn-warning" : "btn-outline-warning"
                    } `}
                    onClick={() => {
                      actions.setFavoritos("planet", planet);
                    }}
                  >
                    <strong>♥</strong>
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
