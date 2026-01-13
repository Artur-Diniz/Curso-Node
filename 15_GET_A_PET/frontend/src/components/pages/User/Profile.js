import { useState, useEffect } from 'react'

import Style from './Profile.module.css'
import formStyles from '../form/Form.module.css'
import Input from '../../pages/form/Input'

function Profile() {
    const [user, setUser] = useState({})

    function onFileChange() {

    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()

        // register(user)
    }

    return (
        < section >
            <div className={Style.profile_header}>
                <h1>Perfil</h1>
                <p>Preview Imagem</p>
            </div>


            <form className={formStyles.form_container}>
                <Input
                    text="Imagem"
                    type="file"
                    name="image"
                    handleOnChange={onFileChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    handleOnChange={handleChange}
                    value={user.email || ''}
                />
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                    value={user.name || ''}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                    value={user.phone || ''}
                />

                <Input
                    text="Senha"
                    type="text"
                    name="password"
                    placeholder="Digite o sua Senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Confirme sua Senha"
                    type="text"
                    name="password"
                    placeholder="Digite o sua Senha"
                    handleOnChange={handleChange}
                />

                <Input type="submit" value="Cadastrar" />
            </form>
        </section >
    )
}

export default Profile