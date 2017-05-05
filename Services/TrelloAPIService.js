let Trello = require("node-trello");
let trello = new Trello("bbb5ec56df13236a74cc563457dce400", "49bb70f34de58912d3d6c5deb6c00263766c115750a29fd2c05d9ea322fdae47");
 
function TrelloService() {

    this.listMyProfileStats = () => {
        return new Promise((resolve, reject) => {
            trello.get("/1/members/me", (err, data) => {
                if (err) return reject(err);
                return resolve(data);
            });
        });
    }
    

    this.listBoardById = (boardId) => {
        return new Promise((resolve, reject) => {
            trello.get(`/1/boards/${boardId}`, {lists:"open"}, (err, data) => {
                if (err) return reject(err);
                return resolve(data);
            });
        });
    }

    this.listBoardByIdWithCards = (boardId) => {
        return new Promise((resolve, reject) => {
            trello.get(`/1/boards/${boardId}/cards`,  (err, data) => {
                if(err) return reject(err);
                return resolve({
                    numberOfCardsInBoard: data.length,
                    data: data
                });
            });
         });
    }

    this.getCountTaskByList = (listId) => {
        return new Promise((resolve, reject) => {
            trello.get(`/1/lists/${listId}/cards`,  (err, data) => {
                if(err) return reject(err);
                return resolve({
                    qtdStoriesInSprint:data.length,
                    stories: data
                });
                //resolve({numberOfStories: data.length, listName: });
            });
        })
    }


}

module.exports = {
    TrelloService
}