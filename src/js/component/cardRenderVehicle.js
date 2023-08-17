import React, { Component, useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardRenderVehicles = ({ vehicle }) => {
  const { store, actions } = useContext(Context);
  const isFavorito = store.favoritos.some(
    (favorito) => favorito === vehicle.name
  );

  return (
    <div className=" mx-1" style={{ width: "300px" }}>
      {store.vehicles.map(
        (e) =>
          e.uid === vehicle.uid && (
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
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
                  <h5 className="card-title">{vehicle.name}</h5>
                  {/* <p className="card-text">
                    <span>{e.description}</span>
                  </p> */}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Manufacturer: {e.properties.manufacturer}
                  </li>
                  <li className="list-group-item">
                    Model: {e.properties.model}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                  <Link to={`/vehicle/${vehicle.uid}`}>
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
                      actions.setFavoritos("vehicle", vehicle);
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
