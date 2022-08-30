import React from 'react'
import S from './FormInitial.module.css'

const FormInitial = () => {
  return (
    <div>
      <form className={S.form}>
        <div className={S.containerForm}>
          <h4 className={S.titleForm}>Faça seu cadastro</h4>
          <div className={S.nome}>
            <label>Nome</label>
            <input className={S.inputPattern} type="text" name="name" id="" />
          </div>
          <div className={S.sobrenome}>
            <label>Sobrenome</label>
            <input className={S.inputPattern} type="text" name="name" id="" />
          </div>
          <div className={S.email}>
            <label>E-mail</label>
            <input className={S.inputPattern} type="email" name="email" id="" />
          </div>
          <div className={S.telefone}>
            <label>Telefone</label>
            <input className={S.inputPattern} type="tel" name="tel" id="" />
          </div>
        </div>

      </form >
    </div>
  )
}

export default FormInitial