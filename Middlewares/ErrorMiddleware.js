
function errorMiddleware() {
    this.notFound = (req, res, next) => {
        let err = new Error('The content you were trying to reach was not found.');
        err.status = 404;
        next(err);
    }

    this.applicationError = (err, req, res, next) => {
        if(err) res.status(err.status || 500).send(err);
        next();
    }
}


module.exports = {
    ErrorMiddleware : new errorMiddleware()
}