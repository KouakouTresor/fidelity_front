import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import { CLIENTS, LOGIN, WELCOME } from './services/routesPath';
import ClientsList from './Component/ClientsList';
import Welcome from './Component/Welcome';
import Header from './Component/header/Header';
function App() {
    const login = {
        userid: '',
        password: '',
        isLogged: false,
        noLogged: false,
    };
    const [user, setUser] = useState(login);
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm user={user} />} />
                    <Route path={LOGIN} element={<LoginForm user={user} />} />
                    <Route path={WELCOME} element={<Welcome />} />
                    <Route path={CLIENTS} element={<ClientsList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
