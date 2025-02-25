import { z } from "zod";

export const deletePatrimonySchema = z.object({
    patrimony_id: z.number()
})