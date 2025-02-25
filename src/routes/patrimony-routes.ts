import { Router } from "express";
import { createPatrimonyControllerFactory, deletePatrimonyControllerFactory, getPatrimoniesControllerFactory, updatePatrimonyControllerFactory } from "../main/factories";
import { validationMiddleware } from "../main/presentation/middleware/validation-middleware";
import { createPatrimonySchema, deletePatrimonySchema, updatePatrimonySchema } from "../main/validation/patrimony";

const router = Router();

router.post(
    '', 
    validationMiddleware(createPatrimonySchema),
    async (req, res) => await createPatrimonyControllerFactory().handler(req, res)
);

router.delete(
    '',
    validationMiddleware(deletePatrimonySchema),
    async (req, res) => await deletePatrimonyControllerFactory().handler(req, res)
);

router.put(
    '',
     validationMiddleware(updatePatrimonySchema),
     async (req, res) => await updatePatrimonyControllerFactory().handler(req, res)
);

router.get(
    '/all',
     async (req, res) => await getPatrimoniesControllerFactory().handler(req, res)
);

export default router;