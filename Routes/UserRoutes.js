
module.exports = (app) => { 

    app.route('/users')
        .post(app.Controllers.UserController.create)
        .get(app.Controllers.UserController.list);

}