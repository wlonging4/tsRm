// import React from 'react';
import React, { Component, ComponentType } from 'react';
import logo from './logo.svg';
import mb from './mobx'
import './App.css';
// import { Router } from 'react-router';
// import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
    console.log(mb)
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    TEST_value: <span className='redName'> {mb.mb1.name}</span><br />{mb.mb1.propertyNames}
                </p>

            </header>
        </div>
    );
}

export default App;
