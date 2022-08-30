import React from 'react'
import '../App.css'
import Header from '../Components/Clientes/Header/Header'
import ListaClientes from '../Components/Clientes/ListaClientes/ListaClientes'

const Clientes = () => {
  return (
    <div className="App">
      <div className="containerHeaderMain">
        <Header/>
        <ListaClientes/>
      </div>
    </div>
  )
}

export default Clientes