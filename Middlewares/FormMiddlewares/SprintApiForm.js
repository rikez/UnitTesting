const form = require('express-form');



let SprintApiForm = () => {

    userForm = form(
        form.field("team_id").trim().required(),
        form.field("score").trim().required().is(/^[0-9{1,4}]+$/),
        form.field("timebox").trim().required(),
        form.field("nickname").trim().required(),
        form.field("date_start").trim().required().isDate("Please, insert the following format: mm/DD/yyyy"),
        form.field("date_end").trim().required().isDate("Please, insert the following format: mm/DD/yyyy"),
        form.field("stories_number").trim().required()
    );

    this.getForm = () => {
        return userForm;
    }
    

}



module.exports = SprintApiForm;