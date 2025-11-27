const Pet = require('../models/pet')


const getToken = require("../helpers/get-token")
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class PetController {

    static async create(req, res) {

        const { name, age, weight, color } = req.body

        const available = true

        //images upload
        if (!name) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Nome" })
            return
        }
        if (!age) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Idade" })
            return
        }
        if (!weight) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem altura" })
            return
        }
        if (!color) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Cor" })
            return
        }

        if (!req.headers.authorization) {
            console.log("Falho")
        }


        const token =  getToken(req) // busca token pela request
        const user = await getUserByToken(token)


        const pet = Pet({
            name, age, weight, color, available, images: [], user: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone,
            }
        })

        // console.log("Headers:", req.headers);


        try {

            // console.log(pet)
            const newPet = await pet.save()
            console.log("Salvo no banco")
            res.status(201).json({ message: "Pet Cadastrado com sucesso!", newPet })


        } catch (error) {
            res.status(500).json({ message: error })

        }
        return

    }
}

