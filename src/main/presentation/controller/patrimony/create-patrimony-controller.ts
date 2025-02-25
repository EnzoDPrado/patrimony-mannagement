import { Request, Response } from "express";
import { Controller } from "../controller";
import { CreatePatrimony } from "../../../domain/usecases";

export class CreatePatrimonyController implements Controller{
    constructor(
        private readonly createPatrimony: CreatePatrimony
    ){}

   async handler(request: Request, response: Response): Controller.Result {
    
    try {
        const {senai_id, type_patrimony_id, name, quantity } = request.body;

        const patrimonyId = await this.createPatrimony.create({senai_id, type_patrimony_id, name, quantity });

        response.status(201).json(patrimonyId);
    } catch (error: any) {
        response.status(500).json({error: error.message})
    }
   }
}