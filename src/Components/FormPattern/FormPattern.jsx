import React, { useState } from 'react'
import S from './FormPattern.module.css'
import FormInitial from '../FormInitial/FormInitial'
import FormMid from '../FormMid/FormMid'
import FormFinal from '../FormFinal/FormFinal'

const Form = () => {
    const [page, setPage] = useState(0);

    const FormTitles = ["FormInitial", "FormMid", "FormFinal"]

    const PageDisplay = () => {
        if (page === 0) {
            return <FormInitial />;
        } else if (page === 1) {
            return <FormMid />;
        } else {
            return <FormFinal />
        }
    };

    return (
        <div className={S.form}>
              <button className={S.btnPattern} type="submit"
                    disabled={page == 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Anterior
                </button>
            {PageDisplay()}
            <div>
                <button className={S.btnPattern} type="submit"
                    disabled={page == FormTitles.length - 1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}
                >
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default Form