const router = require('express').Router()
const PetController = require('../controllers/PetController')

//helpers
const verifyToken = require("../helpers/verify-token")
// const { imageUpload } = require("../helpers/image-upload")

router.post("/create", verifyToken, PetController.create)



module.exports = router