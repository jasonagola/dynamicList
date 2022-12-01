import React from "react";
import Queue from "./Queue";
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import NewBikeSubmit from "./NewBike";
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react'


Amplify.configure(awsconfig)

function App() {

    return (
        <div>

        <Authenticator>
            <NewBikeSubmit></NewBikeSubmit>
            <div>
                <h1>Local Bike Shop NFK</h1>
                <h3>Service Manager</h3>
                <Queue></Queue>
            </div>
        </Authenticator>
        </div>
    )
}

export default App