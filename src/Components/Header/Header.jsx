import React from 'react'
import S from '../Header/Header.module.css'
const Header = () => {
  return (
    <header className={S.header}>
        <nav className={S.nav}>
            <button className={S.btnCadastro}>Cadastrar</button>
            <button className={S.btnClientes}>Clientes</button>
        </nav>
    </header>
  )
}

export default Header