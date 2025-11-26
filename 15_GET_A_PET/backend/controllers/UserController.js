const e = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

//helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const { param } = require('../routes/UserRoutes')


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

        const userExist = await User.findOne({ email: email })

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
            await createUserToken(newUser, req, res)

            return

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            res.status(422).json({ message: "o email é obrigatório" })
            return
        }
        if (!password) {
            res.status(422).json({ message: "a senha é obrigatório" })
            return
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(422).json({
                message: "Não temos um usuário cadastrado com esse Email!"
            })
            return
        }

        //chegar senha 
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res.status(422).json({
                message: "Senha incorreta!"
            })
            return
        }


        await createUserToken(user, req, res)
    }

    static async checkUser(req, res) {
        let currentuser

        if (req.headers.authorization) {
            const token = getToken(req)

            const decoded = jwt.verify(token, "nossosecret")

            currentuser = await User.findById(decoded.id)
            // console.log(currentuser)

            currentuser.password = undefined
        } else {
            currentuser = null
        }

        res.status(200).send(currentuser)
    }

    static async getUserById(req, res) {

        const id = req.params.id

        const user = await User.findById(id).select('-password')

        if (!user) {
            res.status(422).json({
                message: "Usuário não encontrado."
            })

            return
        }

        res.status(200).json({ user })
    }
    static async editUser(req, res) {

        // const id = req.params.id


        res.status(200).json({
            message: "Usuario atualizado "
        })

    }


}