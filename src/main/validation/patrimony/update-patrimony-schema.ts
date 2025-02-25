import { z } from "zod";

export const updatePatrimonySchema = z.object({
    patrimony_id: z.number(),
    name: z.string().nullable(),
    quantity: z.number().nullable()
})