const user =require('../models/user')

module.exports = class UserController{
    static async register(req,res){
        res.json('ola get a pet')
    }
}