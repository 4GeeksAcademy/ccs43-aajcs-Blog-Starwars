import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { CardRenderPeople } from "../component/cardRenderPeople";
import { CardRenderPlanets } from "../component/cardRenderPlanet";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.leerDatosPeoples();
    actions.leerDatosPlanets();
    actions.leerDatosVehicles();
    actions.getCharacters();

  }, []);
  return (
    <div className="container">
    
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header text-danger">
                <h1>Characters</h1>
              </div>
              <div className="card-body d-flex">
                {store.people.map((item, index) => (
                  <div className="">
                    <CardRenderPeople key={index} people={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header text-danger">
                <h1>Planets</h1>
              </div>
              <div className="card-body d-flex">
                {store.people.map((item, index) => (
                  <div className="">
                    <CardRenderPlanets key={index} planet={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header text-danger">
                <h1>Vehicles</h1>
              </div>
              <div className="card-body d-flex">
                {store.people.map((item, index) => (
                  <div className="">
                    <CardRenderPeople key={index} people={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span>
              </Link>
              {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
                  </p>
                ) : null
              }
              <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, "orange")}
              >
                Change Color
              </button>
              <button
                className="btn btn-success"
                onClick={() => actions.leerDatos()}
              >
                Change Color
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
