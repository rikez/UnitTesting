const form = require('express-form');

function UserApiForm() {
    
    this.userForm = form(
            form.field("name").trim().required().is(/^[a-zA-Z\s{1,2}]+$/),
            form.field("password").trim().required(),
            form.field("email").trim().required().isEmail(),
            form.field("nickname").trim().required(),
            form.field("dateOfBirth").trim().required().isDate("Please, insert the following format: mm/DD/yyyy")
        );

}



module.exports = new UserApiForm();