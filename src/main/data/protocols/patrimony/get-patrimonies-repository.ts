export interface GetPatrimoniesRepository{
    getPatrimonies(): GetPatrimoniesRepository.Result
}

export namespace GetPatrimoniesRepository{
    export type Result = Promise<{
        patrimony_name: string;
        quantity: number;
        senai_id: number;
        senai_name: string;
        senai_address: string;
        senai_cep: string;
        senai_unity: string;
        type_id: number;
        type_name: string;
    }[]>
}