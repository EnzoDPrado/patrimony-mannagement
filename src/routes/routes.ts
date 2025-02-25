import { Router } from "express";
import patrimonyRoutes from './patrimony-routes';

const router = Router();

router.use('/patrimony', patrimonyRoutes)

export default router;