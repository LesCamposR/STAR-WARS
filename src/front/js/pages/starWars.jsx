import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/CardPeople.jsx"
import CardPlanet from "../component/CardPlanets.jsx";
import CardVehicles from "../component/cardVehicles.jsx"

const StarWars = () => {
    const { store, actions } = useContext(Context)
    const [ListPeople, setListPeople] = useState({})
    const [ListVehicles, setListVehicles] = useState({})
    const [ListPlanets, setListPlanets] = useState({})

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

        cargaDatos()

        const cargaParalelo = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {
                console.log(respuestaJson)
                setVehicles(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {
                console.log(respuestaJson)
                setPlanets(respuestaJson.results)
            }

            let promesaPlanets = actions.usefetch2("/planets")
            let promesaVehicle = actions.usefetch2("/vehicles")
            let promesaPeople = actions.usefetch2("/people")

            let [a, b, c] = await Promise.all([promesaPeople, promesaPlanets, promesaVehicle])

            a = await a.json()
            setListPlanets(a.results)

            b = await a.json()
            setListVehicles(b.results)

            c = await a.json()
            setListPeople(c.results)
        }
        cargaParalelo()

    }, [])

    useEffect(() => { }, [ListPeople])
    useEffect(() => { }, [ListVehicles])
    useEffect(() => { }, [ListPlanets])

    return (
        <>
            <h1 className="text-danger">Characters</h1>
            {ListPeople && ListPeople.length > 0 ? (
                <>
                    {ListPeople.map((item, index) => {
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
            {ListPlanets && ListPlanets.length > 0 ? (
                <>
                    {ListPlanets.map((item, index) => {
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
            {ListVehicles && ListVehicles.length > 0 ? (
                <>
                    {ListVehicles.map((item, index) => {
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