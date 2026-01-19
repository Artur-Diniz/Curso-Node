import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import style from './AddPet.module.css'
import useFlashMessage from '../../../hooks/useFlashMessage'

import PetForm from '../form/PetForm'



function AddPet() {
    return (
        < section >
            <div className={style.addpet_header}>
                <h1>AddPet</h1>
                <p>Depois ele ficara disponivel para adoção</p>
                <br />
                <p> forms </p>
                <PetForm btnText='Cadastrar Pet'/>
            </div>
        </section >
    )
}

export default AddPet