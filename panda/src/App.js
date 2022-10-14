import React from 'react';

import {Header} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
    return (
    <div className='app'>
        <Header />
        <Navbar />
    </div>
    );
}

export default App;