import { Router } from "express";
import { createPatrimonyControllerFactory, deletePatrimonyControllerFactory, getPatrimoniesControllerFactory, updatePatrimonyControllerFactory } from "../main/factories";

const router = Router();

router.post('', async (req, res) => await createPatrimonyControllerFactory().handler(req, res));

router.delete('', async (req, res) => await deletePatrimonyControllerFactory().handler(req, res));

router.put('', async (req, res) => await updatePatrimonyControllerFactory().handler(req, res));

router.get('/all', async (req, res) => await getPatrimoniesControllerFactory().handler(req, res));

export default router;