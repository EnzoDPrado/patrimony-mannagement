import { DeletePatrimony } from "../../../domain/usecases";
import { DeletePatrimonyRepository } from "../../protocols";

export class DbDeletePatrimony implements DeletePatrimony{
    constructor(
        private readonly deletePatrimonyRepository:DeletePatrimonyRepository
    ){}
    async delete(params: DeletePatrimony.Params): DeletePatrimony.Result {
        await this.deletePatrimonyRepository.deleteByPatrimonyId(params)
    }
}