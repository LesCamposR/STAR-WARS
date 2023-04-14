import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import CardVehicles from "../component/cardVehicles.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
    const { store, actions } = useContext(Context)
    const [listPeople, setListPeople] = useState({})
    const [listVehicles, setListVehicles] = useState({})
    const [listPlanets, setListPlanets] = useState({})

    //se ejecuta la primera vez que se reenderiza el componente
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setListPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {
                console.log(respuestaJson)
                setListVehicles(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {
                console.log(respuestaJson)
                setListPlanets(respuestaJson.results)
            }
        }

        //cargaDatos()
        const cargaParalelo = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setListPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {
                console.log(respuestaJson)
                setListVehicles(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {
                console.log(respuestaJson)
                setListPlanets(respuestaJson.results)
            }

            let promesaPlanets = actions.usefetch2("/planets")
            let promesaVehicle = actions.usefetch2("/vehicles")
            let promesaPeople = actions.usefetch2("/people")

            let [a, b, c] = await Promise.all([promesaPeople, promesaPlanets, promesaVehicle])

            a = await a.json()
            setListPlanets(a.results)

            b = await a.json()
            setListPlanets(b.results)

            c = await a.json()
            setListPlanets(c.results)
        }
        cargaParalelo()

    }, [])

    useEffect(() => { }, [listPeople])
    useEffect(() => { }, [listVehicles])
    useEffect(() => { }, [listPlanets])

    return (
        <>
            <h1 className="text-danger">Characters</h1>
            {listPeople && listPeople.length > 0 ? (
                <>
                    {listPeople.map((item, index) => {
                        return (
                            <CardPeople
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
            <h1 className="text-danger">Planets</h1>
            {listPlanet && listPlanet.length > 0 ? (
                <>
                    {listPlanet.map((item, index) => {
                        return (
                            <CardPlanets
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
            <h1 className="text-danger">Vehicles</h1>
            {listVehicle && listVehicle.length > 0 ? (
                <>
                    {listVehicle.map((item, index) => {
                        return (
                            <CardVehicles
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
        </>
    )
};


export default StarWars;