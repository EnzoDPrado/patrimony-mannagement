export interface DeletePatrimony{
    delete(params: DeletePatrimony.Params): DeletePatrimony.Result
}

export namespace DeletePatrimony{
    export type Params = {
        patrimony_id: number;
    }

    export type Result = Promise<void>
}