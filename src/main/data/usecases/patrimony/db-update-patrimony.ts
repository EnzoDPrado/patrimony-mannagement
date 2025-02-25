import { UpdatePatrimony } from "../../../domain/usecases";
import { UpdatePatrimonyRepository } from "../../protocols";

export class DbUpdatePatrimony implements UpdatePatrimony{
    constructor(
        private readonly updatePatrimonyRepository: UpdatePatrimonyRepository
    ){}
    async update(params: UpdatePatrimony.Params): UpdatePatrimony.Result {
        await this.updatePatrimonyRepository.update(params);
    }
}