import React from 'react'
import S from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={S.header}>
      <nav className={S.nav}>
        <Link to="/"><button className={S.btnCadastro}>Cadastrar</button></Link>
        <Link to="/Clientes"><button className={S.btnClientes}>Clientes</button></Link>
      </nav>
    </header>
  )
}

export default Header