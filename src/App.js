import React from "react";
import Queue from "./Queue";
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import TicketCreator from "./TicketCreator";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'


Amplify.configure(awsExports)

function App() {

    return (
        <Authenticator>
            {({ signOut, user}) => (
            <div>
                <button onClick={signOut}>Sign Out</button>
                <header id="App-header">
                    <h1>Local Bike Shop NFK</h1>
                </header>
                <div id='App'>
                    <h3>Service Manager</h3>
                    <TicketCreator></TicketCreator>
                    <Queue></Queue>
                </div>
            </div>
            )}
        </Authenticator>
        
    )
}

export default App