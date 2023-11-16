const Session = require('../models/Session.model');
const authMiddleware = (req, res, next) => {
    
    if (process.env.NODE_ENV !== "production") {
        Session.findOne().then((session, err) => {
            if (err) {
                res.status(401).send({ message: 'You are not authorized' });
            }
            else {
                const sessionData = JSON.parse(session.session);
                const user = {
                    id: sessionData.user.id,
                    login: sessionData.user.login,
                }

                req.session.user = user;
                return next();
            }
        })
    }

    if (req.session.user) {
        next();
    } else {
        res.status(401).send({ message: 'You are not authorized' });
    }
}

module.exports = authMiddleware;