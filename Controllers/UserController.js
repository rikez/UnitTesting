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

    this.list = (req, res) => {
        User.find().then(users => {
            res.status(200).json({data: users, message: "Success"});
        }).catch(err => {
            res.status(500).json({failure: err, message:"Error"});
        })
    }

    this.listById = (req, res) => {
        let userId = trim(req.params.userId);
        User.findById(userId).then(user => {
            res.status(200).json({data: user, message: "Success"});
        }).catch(err => {
            res.status(500).json({failure: err, message:"Error"});
        })
    }
}

module.exports = new UserController()