import { Request, Response } from "express";
import { Controller } from "../controller";
import { GetPatrimonies, UpdatePatrimony } from "../../../domain/usecases";

export class UpdatePatrimonyController implements Controller{
    constructor(
        private readonly updatePatrimony: UpdatePatrimony
    ){}

   async handler(request: Request, response: Response): Controller.Result {
    try {
        const {patrimony_id, name, quantity} = request.body;

        const patrimonies = await this.updatePatrimony.update({patrimony_id, name, quantity})

        response.status(200).json({patrimonies: patrimonies});
    } catch (error: any) {
        response.status(500).json({error: error.message})
    }
   }
}