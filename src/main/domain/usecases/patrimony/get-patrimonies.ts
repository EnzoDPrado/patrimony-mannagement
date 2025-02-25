import { PatrimonyFormattedModel } from "../../models"

export interface GetPatrimonies{
    get(): GetPatrimonies.Result
}

export namespace GetPatrimonies{
    export type Result = Promise<PatrimonyFormattedModel[]| null>
}