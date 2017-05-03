let User = require('../Settings/MongooseConfig').model('User');
const arrays = require('underscore');

function UserController() {

    this.create = (req, res) => {
        let body = arrays.pick(req.body, 'name', 'nickname', 'email', 'password', 'picture', 'dateOfBirth');
        let user = new User(body);
        user.save().then(userSaved => {
            res.status(201).json({data: userSaved, message: "Success"});
        }).catch(err => {
            res.status(500).send({failure: err, message:"Error"});
        })
    }

}

module.exports = new UserController()