const passport          = require('passport')
const LocalStrategy     = require('passport-local')
const User = require('../models/UserSchema')

// passport setup
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


class UserService {
    async user_new(req) {
        try {
            let password = req.body.password
            console.log("Password is: ", password)
            const newUSer = await new User({username: req.body.username}) //username only
            const UserRegistered = await User.register(newUSer, password)

        } catch (e) {
            return e;
        }
    }

}



module.exports = new UserService();
