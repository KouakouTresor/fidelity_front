import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/auth/LoginForm';
import { CLIENTS, CREATE_CLIENTS, LOGIN, WELCOME } from './services/routesPath';
import ClientsList from './Component/client/ClientsList';

import Header from './Component/header/Header';
import Welcome from './Component/auth/Welcome';
import Logout from './Component/auth/Logout';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path={LOGIN} element={<LoginForm />} />
                    <Route path="/welcome/:userid" element={<Welcome />} />
                    <Route path={CLIENTS} element={<ClientsList />} />
                    {/*  <Route path={CREATE_CLIENTS} element={<CreateClient />} /> */}
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
