import knex, { Knex } from "knex";
import { knexConfig } from "./knex-config";

export class KnexServer{
    private static server: Knex | null = null;

    private constructor(){}

    public static getServer():Knex {
        if(!KnexServer.server){
            const knexInstance = knex(knexConfig);
            KnexServer.server = knexInstance;

            console.log('--- knex instance initialized ---');
        }
        return KnexServer.server;
    }
}