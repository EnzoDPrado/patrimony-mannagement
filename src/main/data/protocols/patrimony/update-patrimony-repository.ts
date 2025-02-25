export interface UpdatePatrimonyRepository{
    update(params: UpdatePatrimonyRepository.Params): UpdatePatrimonyRepository.Result
}

export namespace UpdatePatrimonyRepository{
    export type Params = {
        patrimony_id: number;
        name?: string;
        quantity?: number;
    }

    export type Result = Promise<void>
}