import Input from '../../pages/form/Input'
import { Link } from 'react-router-dom'
import styles from '../../pages/form/Form.module.css'
function Register() {

    function handleChange(e) {

    }

    return (
        < section className={styles.form_container} >
            <h1>Register</h1>
            <form>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="passaword"
                    name="passaword"
                    placeholder="Digite o sua Senha"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Confirmação de senha Senha"
                    type="passaword"
                    name="confirmpassaword"
                    placeholder="Digite o sua Senha"
                    handleOnChange={handleChange}
                />

                <Input type="submit" value="Cadastrar" />
            </form>
            <br/>
            <p> já tem conta? <Link to='/login'> Clique aqui</Link></p>
        </section >
    )


}

export default Register