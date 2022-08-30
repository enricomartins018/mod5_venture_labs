import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './Pages/Cadastrar';
import Clientes from './Pages/Clientes';

const Router = () => {
    return (
        <BrowserRouter className="App">
            <Routes>
                <Route path='/Cadastrar' element={<Cadastrar />}/>
                <Route path='/Clientes' element={<Clientes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router