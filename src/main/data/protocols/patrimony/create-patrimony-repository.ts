export interface CreatePatrimonyRepository{
    create(params: CreatePatrimonyRepository.Params): CreatePatrimonyRepository.Result
}

export namespace CreatePatrimonyRepository{
    export type Params = {
        senai_id: number;
        type_patrimony_id: number;
        name: string;
        quantity: number;
    }

    export type Result = Promise<number>
}