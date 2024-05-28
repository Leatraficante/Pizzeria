import passport from 'passport';
import jwt from 'passport-jwt';
import { passportStrategiesEnum } from './enums.js';
import userModel from '../ms.users/models/users.model.js';
import configs from './configs.js';

const JWTStrategy = jwt.Strategy;
const extractJWT = jwt.ExtractJwt;

const initPassport = () => {
    passport.use(passportStrategiesEnum.JWT, new JWTStrategy({
        jwtFromRequest: extractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: configs.privateKeyJWT
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload.user)
        } catch (error) {
            return done(error)
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id)
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    })
};

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['pizzeriaCookieToken']
    };
    return token
};

const passportCall = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, { session: false }, function (err, user, info) {
            if (err) {
                console.error('Error de autenticacion', err);
                return next;
            };
            if (user) {
                const errorMessage = info.message ? info.message : 'Usuario no autenticado';
                return res.sendClientError(errorMessage)
            }

            req.user = user;
            next();
        })(req, res, next);
    }
};

export { initPassport, passportCall }