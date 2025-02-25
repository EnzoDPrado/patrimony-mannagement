export interface DeletePatrimonyRepository{
    deleteByPatrimonyId(params: DeletePatrimonyRepository.Params): DeletePatrimonyRepository.Result
}

export namespace DeletePatrimonyRepository{
    export type Params = {
        patrimony_id: number;
    }

    export type Result = Promise<void>
}