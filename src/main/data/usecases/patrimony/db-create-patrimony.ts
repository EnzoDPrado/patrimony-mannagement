import { CreatePatrimonyRepository } from "../../../data/protocols";
import { CreatePatrimony } from "../../../domain/usecases";

export class DbCreatePatrimony implements CreatePatrimony{
    constructor(
        private readonly createPatrimonyRepository: CreatePatrimonyRepository
    ){}

    async create(params: CreatePatrimony.Params): CreatePatrimony.Result {
        
        const createPatrimony = await this.createPatrimonyRepository.create(params);

        if(!createPatrimony){
        throw new Error(CreatePatrimony.Exceptions.FAIL_ON_CREATE);
        }
        
        return {patrimony_id: createPatrimony}
    }
}