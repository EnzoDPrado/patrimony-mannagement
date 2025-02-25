import { PatrimonyRepository } from "../../../infra/db/patrimony";
import { DbGetPatrimonies } from "../../data/usecases";
import { GetPatrimoniesController } from "../../presentation/controller/patrimony";

export const getPatrimoniesControllerFactory = () => {
    const patrimonyRepository = new PatrimonyRepository();

    const dbGetPatrimonies = new DbGetPatrimonies(patrimonyRepository);

    return new GetPatrimoniesController(dbGetPatrimonies);
}