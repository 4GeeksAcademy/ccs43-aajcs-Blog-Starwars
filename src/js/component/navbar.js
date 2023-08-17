import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-3">
      <Link to="/">
        <img
          src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png"
          style={{ width: "100px", height: "50px", objectFit: "cover" }}
          className="icon h-50 d-inline-block "
        ></img>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="false"
            >
              Favorites ({store.favoritos.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-start">
              {store.favoritos.map((item, index) => (
                <li id="" key={index}>
                  <div className="d-flex justify-content-between">
                    {item}
                    <a
                      className="trash-icon"
                      onClick={(e) => {
                        actions.deleteFavorito(index);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
