import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/auth/LoginForm';
import { CLIENTS, CREATE_CLIENTS, DELETE_CLIENT, LOGIN, WELCOME } from './services/routesPath';

import Header from './Component/header/Header';
import Welcome from './Component/auth/Welcome';
import Logout from './Component/auth/Logout';
import DeleteClient from './Component/client/DeleteClient';
import CreateClient from './Component/client/CreateClient';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path={LOGIN} element={<LoginForm />} />
                    <Route path={CLIENTS} element={<CreateClient />} />
                    <Route path={DELETE_CLIENT} element={<DeleteClient />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
