import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const validationMiddleware = (schema: ZodSchema) => (request: Request, response: Response, next: NextFunction):void => {
    try {
        schema.parse(request.body);
        return next();
    } catch (error) {
        if(error instanceof ZodError){
            response.status(400).json({error: error.errors});
            return
        }
        response.status(500).json({error: "Internal server error!"})
        return
    }
}