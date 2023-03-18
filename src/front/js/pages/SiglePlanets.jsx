import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planets, setPlanets] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPlanets(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        Soy {planets.name ? planets.name : ""} con el uid {params.uid}
    </>)
}

export default SinglePlanets