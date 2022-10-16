import React from 'react';

import {Header, Menu} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
    return (
    <div className='app'>
        <Header />
        <Navbar />
        <Menu />
    </div>
    );
}

export default App;