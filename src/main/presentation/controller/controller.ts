import { Request, Response } from "express";

export interface Controller{
    handler(request: Request, response: Response): Controller.Result
}

export namespace Controller{
    export type Result = Promise<void>
}