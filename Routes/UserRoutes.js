module.exports = (app) => { 

    app.post('/users', app.Controllers.UserController.create);

}