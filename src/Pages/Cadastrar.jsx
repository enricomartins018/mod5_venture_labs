import React from 'react'
import '../App.css'
import Header from '../Components/Cadastrar/Header/Header'
import FormPattern from '../Components/Cadastrar/FormPattern/FormPattern'

const Cadastrar = () => {
  return (
    <div className="App">
      <div className="containerHeaderMain">
        <Header/>
        <FormPattern/>
      </div>
    </div>
  )
}

export default Cadastrar