import { Knex } from "knex"
import { ENVIRONMENT } from "../../../utils/environment"

const {DATABASE} = ENVIRONMENT

export const knexConfig: Knex.Config ={
    client: 'pg',
    connection:{
        host:DATABASE.HOST,
        database: DATABASE.DATABASE,
        port: DATABASE.PORT,
        user: DATABASE.USER,
        password: DATABASE.PASSWORD
    }
}