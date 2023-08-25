import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleVehicle = () => {
  const { store, action } = useContext(Context);
  const { uid } = useParams();

  // Esta funcion me ayuda a encontrar el character especifico
  const vehicles = store.vehicles.find((item) => item.uid === uid);
  const vehicle = store.vehicle.find((item) => item.uid === uid);

  if (!vehicle) {
    return <Link to={"*"}></Link>;
  }

  return (
    <div className="container">
      <div className="card mx-1" id="detail-card" style={{ minWidth: "18rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{vehicles?.properties.name}</h1>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                soluta eligendi perspiciatis quo quas tempora, fugit facere,
                voluptates obcaecati ducimus libero in, explicabo veritatis
                labore officiis dolor impedit hic amet? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Tempora perferendis dolorum,
                modi laudantium ab iste nulla illo sapiente delectus adipisci,
                aperiam, illum libero accusamus vel aspernatur odio ratione eos
                unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem deleniti excepturi eius rerum provident recusandae cumque
                impedit. Corporis voluptatum, repellat deserunt odio
                reprehenderit praesentium tempore commodi nostrum iusto vitae.
                Quis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr id="detail-line" />
      <div className="d-flex justify-content-around text text-danger">
        <p>
          <span className="fw-bolder">Name</span>
          <br /> {vehicles?.properties.name}
        </p>
        <p>
          <span className="fw-bolder">Manufacturer</span> <br />
          {vehicles?.properties.manufacturer}
        </p>
        <p>
          <span className="fw-bolder">Passengers</span> <br />
          {vehicles?.properties.passengers}
        </p>
        <p>
          <span className="fw-bolder">Max atmosphering speed</span> <br />
          {vehicles?.properties.max_atmosphering_speed}
        </p>
        <p>
          <span className="fw-bolder">Consumables</span> <br />
          {vehicles?.properties.consumables}
        </p>
      </div>

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
