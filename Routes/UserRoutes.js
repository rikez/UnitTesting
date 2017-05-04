let UserApiForm = require('../Middlewares/FormMiddlewares/UserApiForm');

module.exports = (app) => { 

    app.post('/users', UserApiForm.userForm, app.Controllers.UserController.create);
    app.get('/users', app.Controllers.UserController.list);
    app.get('/users/:userId', app.Controllers.UserController.listById);

}