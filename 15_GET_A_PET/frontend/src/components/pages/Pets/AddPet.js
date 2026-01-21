import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import style from './AddPet.module.css'
import useFlashMessage from '../../../hooks/useFlashMessage'

import PetForm from '../form/PetForm'



function AddPet() {
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()
    const navigator = useNavigate()

    async function registerPet(pet) {
        let msgType = 'sucess'

        const formData = new FormData

        await Object.keys(pet).forEach((key) => {
            console.log(pet[key])

            if (key === 'images') {
                for (let i = 0; i < pet[key].length; i++) {
                    formData.append('images', pet[key][i])
                }
            } else {
                formData.append(key, pet[key])
            }
        })

        const data = await api.post('pets/create', formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data
        })
            .catch((err) => {
                msgType = 'error'
                return err.response.data
            })

        setFlashMessage(data.message, msgType)
        if (msgType !== 'error') {
            navigator('/pets/mypets')
        }

    }


    return (
        < section >
            <div className={style.addpet_header}>
                <h1>AddPet</h1>
                <p>Depois ele ficara disponivel para adoção</p>
                <br />
                <p> forms </p>
                <PetForm handleSubmit={registerPet} btnText='Cadastrar Pet' />
            </div>
        </section >
    )
}

export default AddPet