import { useState, useContext } from 'react'

import Input from '../../pages/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../pages/form/Form.module.css'

import { Context } from '../../../context/UserContext'


function Login() {
    const [user, setUser] = useState({})
    const { login } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        login(user)
    }

    return (
        < section className={styles.form_container} >
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite o sua Senha"
                    handleOnChange={handleChange}
                />


                <Input type="submit" value="Logar" />
            </form>
            <br />
            <p> Não tem conta? <Link to='/register'> Clique aqui</Link></p>
        </section >
    )


}

export default Login