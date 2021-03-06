"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTokenAdmin = exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkToken = (req, res, next) => {
    const token = req.header('x-token') || '';
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is neccesary'
        });
    }
    try {
        const Jtoken = jsonwebtoken_1.default.verify(token, (process.env.SECRET_JWT_SEED || ''));
        req.body = Jtoken;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is no valid'
        });
    }
    next();
};
exports.checkToken = checkToken;
const checkTokenAdmin = (req, res, next) => {
    const token = req.header('admin-token') || '';
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is neccesary'
        });
    }
    try {
        const Jtoken = jsonwebtoken_1.default.verify(token, (process.env.SECRET_JWTADMIN_SEED || ''));
        req.body = Jtoken;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is no valid'
        });
    }
    next();
};
exports.checkTokenAdmin = checkTokenAdmin;
//# sourceMappingURL=checkToken.js.map