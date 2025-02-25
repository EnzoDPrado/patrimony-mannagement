import { Request, Response } from "express";
import { Controller } from "../controller";
import { GetPatrimonies } from "../../../domain/usecases";

export class GetPatrimoniesController implements Controller{
    constructor(
        private readonly getPatrimonies: GetPatrimonies
    ){}

   async handler(_request: Request, response: Response): Controller.Result {
    try {
        const patrimonies = await this.getPatrimonies.get()

        response.status(200).json({patrimonies: patrimonies});
    } catch (error: any) {
        response.status(500).json({error: error.message})
    }
   }
}