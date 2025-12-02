const Pet = require('../models/pet')


const getToken = require("../helpers/get-token")
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require("mongoose").Types.ObjectId

module.exports = class PetController {

    static async create(req, res) {

        const { name, age, weight, color } = req.body

        const images = req.files

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
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Altura" })
            return
        }
        if (!color) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Cor" })
            return
        }


        if (images.length === 0) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Foto" })
            return
        }

        const token = getToken(req) // busca token pela request
        const user = await getUserByToken(token)


        const pet = Pet({
            name, age, weight, color, available, images: [], user: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone,
            }
        })

        images.map((image) => {
            pet.images.push(image.filename)
        })

        // console.log("Headers:", req.headers);


        try {

            // console.log(pet)
            const newPet = await pet.save()
            res.status(201).json({ message: "Pet Cadastrado com sucesso!", newPet })


        } catch (error) {
            res.status(500).json({ message: error })

        }
        return
    }

    static async getAll(req, res) {

        const pets = await Pet.find().sort('-createdAt')

        res.status(200).json({
            pets: pets,
        })
    }
    static async getAllUserPets(req, res) {

        //busca os Pets em que o próprio usuário cadastrou para a adoção

        const token = getToken(req) // busca token pela request
        const user = await getUserByToken(token)

        const pets = await Pet.find({ 'user._id': user._id }).sort('-createdAt')

        res.status(200).json({
            pets: pets,
        })
    }
    static async getAllUserAdoptions(req, res) {

        //busca os Pets que em eu adotei 

        const token = getToken(req) // busca token pela request
        const user = await getUserByToken(token)

        const pets = await Pet.find({ 'adopter._id': user._id }).sort('-createdAt')

        res.status(200).json({
            pets: pets,
        })
    }

    static async getPetbyId(req, res) {
        const id = req.params.id

        if (!ObjectId.isValid(id)) {
            res.status(417).json({ message: "Id invalido!" })
            return
        }


        const pet = await Pet.findOne({ _id: id })

        if (!pet) {
            res.status(404).json({ message: "Pet não encontrado!" })
            return
        }

        res.status(200).json({
            pet: pet,
        })
    }


    static async removePetById(req, res) {
        const id = req.params.id

        //verifica se o Id é valido 
        if (!ObjectId.isValid(id)) {
            res.status(417).json({ message: "Id invalido!" })
            return
        }

        //busca pet na base
        const pet = await Pet.findOne({ _id: id })

        //verifica se existe um pet com esse id
        if (!pet) {
            res.status(404).json({ message: "Pet não encontrado!" })
            return
        }

        const token = getToken(req) // busca token pela request
        const user = await getUserByToken(token)


        if (pet.user._id.toString() !== user._id.toString()) {
            res.status(417).json({ message: "Houve um problema ao processar sua solicitação!" })
            return
        }

        await Pet.findByIdAndDelete(id)

        res.status(200).json({
            message: "Pet removido com sucesso"
        })
    }

    static async updatePetById(req, res) {

        const { name, age, weight, color, available } = req.body

        const images = req.files

        const updatedData = {}


        const id = req.params.id

        //verifica se o Id é valido 
        if (!ObjectId.isValid(id)) {
            res.status(417).json({ message: "Id invalido!" })
            return
        }


        //images upload
        if (!name) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Nome" })
            return
        } else {
            updatedData.name = name
        }

        if (!age) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Idade" })
            return
        }
        else {
            updatedData.age = age
        }

        if (!weight) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Altura" })
            return
        }
        else {
            updatedData.weight = weight
        }

        if (!color) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Cor" })
            return
        } else {
            updatedData.color = color
        }


        if (images.length === 0) {
            res.status(422).json({ message: "Pet não pode ser cadastrado sem Foto" })
            return
        } else {
            updatedData.images = []
            images.map((image) => {
                updatedData.images.push(image.filename)
            })
        }

        await Pet.findByIdAndUpdate(id, updatedData)

        res.status(200).json({ message: "Pet atualizado com sucesso!" })

    }





}

