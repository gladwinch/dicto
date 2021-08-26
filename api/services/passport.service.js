const { passportAuthJwt } = require("../helpers/passportAuthHelper");
const passport = require("passport");
const AnonymousStrategy = require('passport-anonymous').Strategy

module.exports = {
    initialize: () => {
        passportAuthJwt(require("../models/user.model"), "user")

        passport.use(new AnonymousStrategy());

    }
}
