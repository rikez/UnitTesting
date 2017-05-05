const jsReport = require('jsreport');
const cron = require('node-cron');


module.exports = (app) => {

    let trelloService = new app.Services.TrelloAPIService.TrelloService();

    function ReportController() {

        this.getSprintColunmAndGenerateDailyReport = (req, res) => {
            /*trelloService.listMyProfileStats().then(response => {
                return response;
            }).then(response => {
                trelloService.listBoardByIdWithCards(response.idBoards[4]).then(boardWihCards => {
                    res.status(200).json(boardWihCards);
                }).catch(err => res.status(200).send(err))
            }).catch(err => {
                res.send(err);
            })*/  
            trelloService.getCountTaskByList("58af44cec151408da43f2eca").then(stories => {
                res.send(stories);
            }).catch(err => res.send(err));
        }

        this.getSprintColunmAndGenerateEndSprintReport = (req, res) => {

        }

    }

    return ReportController;
}