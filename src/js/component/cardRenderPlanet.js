import React, { Component, useContext } from "react";

import { Context } from "../store/appContext";

export const CardRenderPlanets = ({ planet }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" mx-1" style={{ width: "300px" }}>
      {store.planets.map(
        (e) =>
          e.uid === planet.uid && (
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
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
                    gender: {e.properties.gender}
                  </li>
                  <li className="list-group-item">
                    hair_color: {e.properties.hair_color}
                  </li>
                  <li className="list-group-item">
                    eye_color: {e.properties.eye_color}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary "
                    // onClick={() => handleDetails(char.result.uid)}
                  >
                    Details
                  </button>

                  <button
                    href="#"
                    className="btn btn-outline-warning "
                    // onClick={() => {
                    //   actions.setFavoritesCharacters(char);
                    // }}
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
