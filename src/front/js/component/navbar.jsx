import React, { useState, useEffect, useContext } from "react";
import Context from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //<a href="./demo.html">
  const { store, actions } = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img className="img-responsive h-25 w-25 starWarsNavIcon" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="btn-group">
          <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Action
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
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
