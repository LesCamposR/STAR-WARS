import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import WithAuth from "../component/Auth/withAuth";

const Info = () => {
    const { store, actions } = useContext(Context)
    const [infoUsuario, setInfoUsuario] = useState("ninguno")

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/favorites")
            console.log(response.ok)
            console.log(respuestaJson)
            if (response.ok) {
                setInfoUsuario(respuestaJson.name)
            }
        }
        cargaDatos()
    }, [])

    return (<>
        <div>userName: {infoUsuario}</div>
    </>)

}

export default WithAuth(Info);