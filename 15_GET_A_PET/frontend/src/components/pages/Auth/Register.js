import Input from '../../pages/form/Input'

function Register() {

    function handleChange(e) {

    }

    return (
        < section >
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

                <Input type="submit" value="Cadastrar"/>
            </form>
        </section >
    )


}

export default Register