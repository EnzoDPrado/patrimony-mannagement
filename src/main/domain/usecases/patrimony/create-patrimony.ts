export interface CreatePatrimony{
    create(params: CreatePatrimony.Params): CreatePatrimony.Result
}

export namespace CreatePatrimony{
    export type Params = {
        senai_id: number;
        type_patrimony_id: number;
        name: string;
        quantity: number;
    }

    export type Result = Promise<{patrimony_id: number;}>

    export enum Exceptions{
        FAIL_ON_CREATE = 'FAIL ON CREATE PATRIMONY'
    }
}