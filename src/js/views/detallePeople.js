import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallePeople = () => {
  const { store, action } = useContext(Context);
  const { uid } = useParams();

  // Esta funcion me ayuda a encontrar el character especifico
  const peoples = store.peoples.find((item) => item.uid === uid);
  const people = store.people.find((item) => item.uid === uid);

  if (!peoples) {
    return <Link to={"*"}></Link>;
  }

  return (
    <div className="container">
      <div className="card mx-1" id="detail-card" style={{ minWidth: "18rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${peoples.uid}.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{peoples.properties.name}</h1>
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
      <hr className="text-danger my-4 fw-bolder" size="5" />
      <div className="d-flex justify-content-around text text-danger">
        <p>
          <span className="fw-bolder">Name</span>
          <br /> {peoples.properties.name}
        </p>
        <p>
          <span className="fw-bolder">Birth year</span> <br />{" "}
          {peoples.properties.birth_year}
        </p>
        <p>
          <span className="fw-bolder">Gender</span> <br />{" "}
          {peoples.properties.gender}
        </p>
        <p>
          <span className="fw-bolder">Height</span> <br />{" "}
          {peoples.properties.height}
        </p>
        <p>
          <span className="fw-bolder">Skin color</span> <br />{" "}
          {peoples.properties.skin_color}
        </p>
        <p>
          <span className="fw-bolder">Eye color</span> <br />{" "}
          {peoples.properties.eye_color}
        </p>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
