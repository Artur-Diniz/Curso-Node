import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Style from './AddPet.module.css'
import useFlashMessage from '../../../hooks/useFlashMessage'




function AddPet() {
    return (
        < section >
            <div className={Style.addpet_header}>
                <h1>AddPet</h1>
                <p>Depois ele ficara disponivel para adoção</p>
                <br />
                <p> forms </p>
            </div>
        </section >
    )
}

export default AddPet