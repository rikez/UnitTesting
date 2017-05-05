module.exports = (app) => { 
    let reportController = new app.Controllers.ReportController() 

    app.get('/trello/profile', reportController.getSprintColunmAndGenerateDailyReport);

}