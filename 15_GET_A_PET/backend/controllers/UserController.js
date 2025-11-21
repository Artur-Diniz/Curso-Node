const e = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const createUserToken = require('../helpers/create-user-token')


module.exports = class UserController {
    static async register(req, res) {

        // const name = req.body.name
        // const email = req.body.email
        // const phone = req.body.phone
        // const password = req.body.password
        // const confirmpassword = req.body.confirmpassword


        const { name, email, phone, password, confirmpassword } = req.body

        //validação

        if (!name) {
            res.status(422).json({ message: "o nome é obrigatório" })
            return
        }
        if (!password) {
            res.status(422).json({ message: "o senha é obrigatório" })
            return
        }
        if (!email) {
            res.status(422).json({ message: "o email é obrigatório" })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ message: "o senha é obrigatório" })
            return
        }
        if (!phone) {
            res.status(422).json({ message: "o telefone é obrigatório" })
            return
        }
        if (password != confirmpassword) {
            res.status(400).json({ message: "a senha e a confirmação de senha devem ser iguais" })
            return
        }

        //verificar se o email ja foi cadastrado na base

        const userExist = await User.findOne({ emai: email })

        if (userExist) {
            res.status(422).json({
                message: "ja exite um usuário cadastrado com esse email!"
            })
            return
        }

        //

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // criar o usuario

        const user = new User(
            {
                name,
                email,
                phone,
                password: passwordHash

            }
        )

        try {
            const newUser = await user.save()
            await createUserToken(newUser,req,res)

            return

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}