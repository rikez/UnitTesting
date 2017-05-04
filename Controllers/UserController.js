let User = require('../Settings/MongooseConfig').model('User');
const arrays = require('underscore');

function UserController() {

    this.create = (req, res) => {
        let body = arrays.pick(req.body, 'name', 'nickname', 'email', 'password', 'picture', 'dateOfBirth');
        if (!req.form.isValid) {
            return res.status(400).send({failure: req.form.errors, message:"Error"});
        }

        let user = new User(body);
        user.save().then(userSaved => {
            return res.status(201).json({data: userSaved, message: "Success"});
        }).catch(err => {
            return res.status(500).send({failure: err, message:"Error"});
        })
    }

    this.list = (req, res) => {
        User.find().then(users => {
            return res.status(200).json({data: users, message: "Success"});
        }).catch(err => {
            return res.status(500).json({failure: err, message:"Error"});
        })
    }

    this.listById = (req, res) => {
        let userId = req.params.userId;
        User.findById(userId).then(user => {
            return res.status(200).json({data: user, message: "Success"});
        }).catch(err => {
            return res.status(500).json({failure: err, message:"Error"});
        })
    }
}

module.exports = new UserController()