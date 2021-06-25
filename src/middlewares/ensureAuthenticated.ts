import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload{
    sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "bd9fbf3a97a33b02d4fb49db20dd6fb8") as IPayload;
        request.user_id = sub;
    } catch (err) {
        return response.status(401).end();
    }

    return next();
}