import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //<a href="./demo.html">
  const { store, actions } = useContext(Context)

  const handleDelete = (itemIndex) => {
    actions.deleteFavorite(itemIndex);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img className="img-responsive h-25 w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <div>
            <div className="nav-item dropdown btn btn-warning">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </div>
              <ul
                className="dropdown-menu list-unstyled"
                aria-labelledby="navbarDropdown"
              >
                {store.favoritos && store.favoritos.length > 0 ? (
                  <>
                    {store.favoritos.map((item, index) => {
                      return (
                        <>
                          <React.Fragment key={index}>
                            <Link to={item.link} className="text-left">
                              <li className="d-flex align-items-center">
                                {item.name}
                              </li>
                            </Link>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(index)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </React.Fragment>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>No favorites yet</>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};



/*
[{},{},{
  name:"",
  uid:"",
  category:,

}]

[{},{},{
  name:"",
  uid:"",
  category:,
}]

[{},{},{
  name:"",
  uid:"",
  category:,

}]
*/
