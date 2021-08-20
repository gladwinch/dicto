const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const opts = {
	jwt: {
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.SECRET_KEY,
		passReqToCallback: true,
	},
}

exports.passportAuthJwt = (Model, authName) => {
	passport.use(
		authName,
		new JwtStrategy(opts.jwt, (req, jwt_payload, done) => {
			const opts = {
				where: { id: jwt_payload.id },
			}
			if (authName === 'user' || authName === 'deliveryUser') opts.where.status = true

			Model.findOne(opts)
			.then((u) => {
				if (u) {
					req[authName] = u
					req[`is${authName}`] = true;
					done(null, u)
				} else {
					done(null, false)
				}
			})
			.catch((err) => {
				done(err, false)
			})
		})
	)
}
