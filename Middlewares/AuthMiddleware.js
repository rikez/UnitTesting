const JWT = require('jsonwebtoken');

function AuthMiddleware() {
    
    this.isAuthenticatedToken = (req, res, next) => {
        let token = req.headers['Authorization'];
        if(token) {
            JWT.verify(token, process.env.AUTH, (err, tokenDecoded) => {
                if(err) res.status(401).json({failure : "You are not authorized to proceed.", error: "Token is invalid."});
                
                req.user = tokenDecoded;

                next();
            })
        } else {
            res.status(401).json({failure : "You are not authorized to proceed.", error: "Token was not provided."});
        }
    }

    this.isAuthenticatedCookie = (req, res, next) => {

    }
}

module.exports = {
    AuthMiddleware : new AuthMiddleware()
}