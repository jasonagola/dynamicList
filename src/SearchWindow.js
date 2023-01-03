import { API, graphqlOperation } from 'aws-amplify'
import React, {useState} from 'react'
import { listServiceTickets } from './graphql/queries'
import './SearchWindow.css'

function SearchWindow() {
    const dataArray = ["Cheese", "Salami", "Pepperoni", "Mushrooms", "Onions", "Artichokes", "Peaches", "Goat Cheese", "Espresso", "Vodka"]
    const [searchResults, setSearchResults] = useState()

    async function searchDatabase() {
        const results = await API.graphql(graphqlOperation(listServiceTickets, ))
    }

    return (
        <div id='searchWindow'>
            <input id="searchBox"></input>
            <div id="searchResults">
                <table>
                    <tbody>
                        {dataArray.map((child, idx) => {
                            return (
                            <tr key={child} id={idx}>{child}<button>Add</button></tr>
                            
                            )
                        })}
                    </tbody>                    
                </table>

            </div>
        </div>
    )
}

export default SearchWindow