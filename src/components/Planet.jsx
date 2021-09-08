import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios';  

const Planet = () => {
    const { search, number } = useParams();
    const [state, setState] = useState(0);

    console.log("Numn",number)
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${number}/`)
        .then(response => {
            console.log(response.data)

            setState({
                swData: response.data
            })
        })
        .catch(error => console.log(error))

    },[search, number]);


    return (
        <div>
            {state.swData ? 
            <div>
                <h1>{state.swData.name} </h1>
                <p>Climate: {state.swData.climate}</p>
                <p>Terrain:{state.swData.terrain}</p>
                <p>Surface Water: {state.swData.surface_water}</p>
                <p>Population: {state.swData.population}</p>
            </div>:
            <div>
                <h1> These are not the droids your are looking for. </h1>
                <h5> Insert non-copyrighted image of Obi-Wan </h5>
            </div>
            }
        </div>
    )
}

export default Planet