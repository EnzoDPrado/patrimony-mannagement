export interface UpdatePatrimony{
    update(params: UpdatePatrimony.Params): UpdatePatrimony.Result
}

export namespace UpdatePatrimony{
    export type Params = {
        patrimony_id: number;
        name?: string;
        quantity?: number;
    }

    export type Result = Promise<void>
}