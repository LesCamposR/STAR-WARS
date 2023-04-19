import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { ToDo } from "./pages/todos.jsx";

import StarWars from "./pages/starWars.jsx";
import People from "./component/people.jsx";
import Planets from "./component/planets.jsx";
import Vehicles from "./component/vehicles.jsx";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<StarWars />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:thetitle" />
            <Route element={<People />} path="/people/:uid" />
            <Route element={<Planets />} path="/planets/:uid" />
            <Route element={<Vehicles />} path="/vehicles/:uid" />
            <Route element={<h1>Not found! 404</h1>} path="*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
