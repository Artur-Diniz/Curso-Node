import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import userFlashMessage from './useFlashMessage'

export default function useAuth() {
    const{setFlashMessage} = userFlashMessage()

    async function register(user) {

        let msgText = 'Cadastro realizado com sucesso'
        let msgType = 'sucess'

        try {
            const data = await api.post('/users/register', user).then((Response) => {
                return Response.data
            })
            console.log(data)

        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
            console.log(error)
        }

        setFlashMessage(msgText,msgType)
    }

    return { register }
}