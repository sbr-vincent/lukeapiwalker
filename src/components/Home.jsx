import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const Home = (props) => {
    const [number,setNumber] = useState('');
    const [search,setSearch] = useState('people');
    const history = useHistory();
    console.log("History2:", history)

    const searchSWAPI = () => {
        search === 'people' ? history.push(`/people/${number}`): history.push(`/planet/${number}`)
        history.goForward();
    }

    return (
        <div>
            <label>Search for:
                <select name="data" id="data" onChange={ (e) => setSearch(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
            </label>

            <p>Id:
                <input name='number' value={number} onChange={ (e) => setNumber(e.target.value)}></input>
            </p>

            <button onClick={ () => searchSWAPI()}>Search</button>

        </div>
    )
}

export default Home
