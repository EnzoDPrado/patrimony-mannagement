import { PatrimonyRepository } from "../../../infra/db/patrimony"
import { DbCreatePatrimony } from "../../data/usecases";
import { CreatePatrimonyController } from "../../presentation/controller/patrimony";

export const createPatrimonyControllerFactory = () => {
    const patrimonyRepository = new PatrimonyRepository();

    const dbCreatePatrimony = new DbCreatePatrimony(patrimonyRepository);

    return new CreatePatrimonyController(dbCreatePatrimony);
}