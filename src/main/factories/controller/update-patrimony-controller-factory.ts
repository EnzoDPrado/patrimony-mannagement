import { PatrimonyRepository } from "../../../infra/db/patrimony";
import { DbGetPatrimonies, DbUpdatePatrimony } from "../../data/usecases";
import { GetPatrimoniesController, UpdatePatrimonyController } from "../../presentation/controller/patrimony";

export const updatePatrimonyControllerFactory = () => {
    const patrimonyRepository = new PatrimonyRepository();

    const dbUpdatePatrimony = new DbUpdatePatrimony(patrimonyRepository);

    return new UpdatePatrimonyController(dbUpdatePatrimony);
}