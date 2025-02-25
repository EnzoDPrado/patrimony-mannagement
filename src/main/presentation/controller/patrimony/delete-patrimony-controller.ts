import { Request, Response } from "express";
import { Controller } from "../controller";
import { DeletePatrimony } from "../../../domain/usecases";

export class DeletePatrimonyController implements Controller{
    constructor(
        private readonly deletePatrimony: DeletePatrimony
    ){}

   async handler(request: Request, response: Response): Controller.Result {
    
    try {
        const {patrimony_id} = request.body;

        await this.deletePatrimony.delete({patrimony_id})

        response.status(201).json({message: 'Success on delete patrimony!'});
    } catch (error: any) {
        response.status(500).json({error: error.message})
    }
   }
}