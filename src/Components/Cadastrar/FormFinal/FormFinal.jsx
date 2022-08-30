import React from 'react'
import S from './FormFinal.module.css'

const FormFinal = () => {
  return (
    <div>
      <form className={S.form}>
        <div className={S.containerForm}>
          <h4 className={S.titleForm}>Insira seus dados pessoais</h4>
          <div className={S.cep}>
            <label>Data de Nascimento</label>
            <input className={S.inputPattern} type="date" name="date" id="date" />
          </div>
          <div className={S.endereco}>
            <label>CPF ou CNPJ</label>
            <input className={S.inputPattern} type="text" name="cpf" id="cpfOuCnpj" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
          </div>
          <div className={S.endereco}>
            <label>Renda Mensal</label>
            <input className={S.inputPattern} type="text" name="text" id="rendaMensal" />
          </div>
          <button className={S.btnPattern} type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default FormFinal