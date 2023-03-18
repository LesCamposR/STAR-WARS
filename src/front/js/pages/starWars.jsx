import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import Planets from "../component/planets.jsx";
import Vehicles from "../component/vehicles.jsx";
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

    return (<>

        <h2 className="m-2 bg-warning">People</h2>
        <div>
            <ul className="d-flex">
                {listPeople && listPeople.length > 0 ?
                    <>
                        {listPeople.map((item, index) => {
                            return <div className="p-3 ">
                                <CardPeople name={item.name} uid={item.uid} />
                            </div>
                        })}
                    </> : <></>}
            </ul>
        </div>
        <br />
        <h2>Vehicles</h2>
        <div>
            <ul className="d-flex ">
                {listVehicles && listVehicles.length > 0 ?
                    <>
                        {listVehicles.map((item, index) => {
                            return <li className="p-3">
                                <Vehicles name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>
        <br />
        <h2>Planets</h2>
        <div>
            <ul className="d-flex">
                {listPlanets && listPlanets.length > 0 ?
                    <>
                        {listVehicles.map((item, index) => {
                            return <li className="p-3">
                                <Planets name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>

    </>)
}

export default StarWars