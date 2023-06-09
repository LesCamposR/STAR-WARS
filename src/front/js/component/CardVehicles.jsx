import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = (props) => {
    const { store, actions } = useContext(Context)

    return (

        <div className="card m-2" style={{ minWidth: "18rem" }}>
            <div className="card-body m-1 p-1">
                <img className="rounded img-thumbnail img-center" src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} alt="Vehicle Image" />
                <br />
                <h3 className="card-title mt-2 text-center">{props.name}</h3>
                <p className="card-text text-start ps-4 mb-2"><em>Information</em>
                    <ul className="text-start ps-4">
                        <div key={props.uid}>Model: {props.model}</div>
                        <div key={props.uid}>Manufacturer: {props.manufacturer}</div>
                    </ul>
                </p>
                <div className="text-center">
                    <Link to={`/vehicle/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                    <button type="button" onClick={() => {
                        actions.agregarFavorito({
                            name: props.name,
                            uid: props.uid,
                            category: "vehicle",
                            link: `/vehicle/${props.uid}`
                        }
                        )
                    }} className="btn btn-outline-warning ms-5"><i className="far fa-heart"></i></button>
                </div>
            </div>
        </div>

    );
};

export default CardVehicles;