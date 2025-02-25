import { SenaiModel } from "../senai";
import { TypePatrimonyModel } from "./type-patrimony-model";

export type PatrimonyFormattedModel = {
    name: string;
    quantity: number;
    senai: SenaiModel
    type: TypePatrimonyModel
}