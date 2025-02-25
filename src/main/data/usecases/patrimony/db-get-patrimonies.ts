import { PatrimonyFormattedModel } from "../../../domain/models";
import { GetPatrimonies } from "../../../domain/usecases";
import { GetPatrimoniesRepository } from "../../protocols";

export class DbGetPatrimonies implements GetPatrimonies{
    constructor(
        private readonly getPatrimoniesRepository: GetPatrimoniesRepository
    ){}
    async get(): GetPatrimonies.Result {
        const patrimonies = await this.getPatrimoniesRepository.getPatrimonies();

        if(!patrimonies || patrimonies?.length === 0) return null

        const patrimoniesFormatted: PatrimonyFormattedModel[] | null = [];

        for (let i = 0; i < patrimonies.length; i++) {
            const patrimony = patrimonies[i];
            
            const basePatrimony = {
                name: patrimony.patrimony_name,
                quantity: patrimony.quantity,
                senai: {
                    senai_id: patrimony.senai_id,
                    name: patrimony.senai_name,
                    cep: patrimony.senai_cep,
                    unit: patrimony.senai_unity,
                    address: patrimony.senai_address
                },
                type: {
                    type_patrimony_id: patrimony.type_id,
                    name: patrimony.type_name
                }
            }

            patrimoniesFormatted.push(basePatrimony)
        }

        return patrimoniesFormatted;
    }
}