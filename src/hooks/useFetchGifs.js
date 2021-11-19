//Los hooks no son mas que funciones
import { useState, useEffect } from "react"
import {getGifs} from "../helpers/getGifs"



export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    }); 

    useEffect(() => {

        getGifs(category)
           .then(imgs => {
                setState({
                   data: imgs,
                   loading: false
                 })
            
         })
    })

    return state; // { data: [], loading: true }
}

//Este hook fue creado para...