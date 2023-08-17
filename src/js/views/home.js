import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { CardRenderPeople } from "../component/cardRenderPeople";
import { CardRenderPlanets } from "../component/cardRenderPlanet";
import { CardRenderVehicles } from "../component/cardRenderVehicle";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {}, []);
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
              {store.planet.map((item, index) => (
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
              {store.vehicle.map((item, index) => (
                <div className="">
                  <CardRenderVehicles key={index} vehicle={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
