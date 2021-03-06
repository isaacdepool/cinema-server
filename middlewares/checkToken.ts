import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const checkToken = (req:Request, res:Response, next:NextFunction) =>{

    const token = req.header('x-token') || '';    

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token is neccesary'
        });
    }

    try {
       const Jtoken = jwt.verify( token, (process.env.SECRET_JWT_SEED || ''));
       req.body = Jtoken;       

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token is no valid'
        });
        
    }

    next();

}

export const checkTokenAdmin = (req:Request, res:Response, next:NextFunction) =>{

    const token = req.header('admin-token') || '';    

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token is neccesary'
        });
    }

    try {
       const Jtoken = jwt.verify( token, (process.env.SECRET_JWTADMIN_SEED || ''));
       req.body = Jtoken;       

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token is no valid'
        });
        
    }

    next();

}