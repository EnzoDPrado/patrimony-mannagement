import { PatrimonyRepository } from "../../../infra/db/patrimony"
import { DbDeletePatrimony } from "../../data/usecases/patrimony/db-delete-patrimony";
import { DeletePatrimonyController } from "../../presentation/controller/patrimony";

export const deletePatrimonyControllerFactory = () => {
    const patrimonyRepository = new PatrimonyRepository();

    const dbDeletePatrimony = new DbDeletePatrimony(patrimonyRepository);

    return new DeletePatrimonyController(dbDeletePatrimony);
}