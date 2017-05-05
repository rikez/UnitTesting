let Sprint = require('../Settings/MongooseConfig').model('Sprint');
const arrays = require('underscore');

let SprintController = () => {

    this.create = (req, res) => {
        let body = arrays.pick(req.body, 'team_id', 'timebox', 'date_start', 'date_end', 'score', 'stories_number');
        if (!req.form.isValid) {
            return res.status(400).send({failure: req.form.errors, message:"Error"});
        }

        let sprint = new Sprint(body);
        sprint.save().then(userSaved => {
            return res.status(201).json({data: userSaved, message: "Success"});
        }).catch(err => {
            return res.status(500).send({failure: err, message:"Error"});
        })
    }

    this.list = (req, res) => {
        Sprint.find().then(sprints => {
            return res.status(200).json({data: sprints, message: "Success"});
        }).catch(err => {
            return res.status(500).json({failure: err, message:"Error"});
        })
    }

    this.listById = (req, res) => {
        let userId = req.params.sprintId;
        Sprint.findById(sprintrId).then(sprint => {
            return res.status(200).json({data: sprint, message: "Success"});
        }).catch(err => {
            return res.status(500).json({failure: err, message:"Error"});
        })
    }
}

module.exports = SprintController;