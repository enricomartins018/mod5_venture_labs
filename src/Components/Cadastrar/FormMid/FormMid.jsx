import React from 'react'
import S from './FormMid.module.css'

const FormMid = () => {
  return (
    <form className={S.form}>
      <div className={S.containerForm}>
        <h4 className={S.titleForm}>Endereço</h4>
        <div className={S.cep}>
          <label>CEP</label>
          <input className={S.inputPattern} name="CEP" id="CEP" required pattern="\d{5}-\d{3}" />
        </div>
        <div className={S.endereco}>
          <label>Endereço 1</label>
          <input className={S.inputPattern} type="text" name="name" id="" />
        </div>
        <div className={S.endereco}>
          <label>Endereço 2</label>
          <input className={S.inputPattern} type="text" name="name" id="" />
        </div>
      </div>
    </form>
  )
}

export default FormMid