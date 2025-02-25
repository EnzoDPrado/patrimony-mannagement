import { z } from "zod";

export const createPatrimonySchema = z.object({
    senai_id: z.number(),
    type_patrimony_id: z.number(),
    name: z.string(),
    quantity: z.number()
})