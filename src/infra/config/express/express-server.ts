import express from 'express';
import cors from 'cors';
import allRoutes from '../../../routes/routes';

export class ExpressServer{
    private static server:express.Application | null = null;

    private constructor(){}

    public static getServer():express.Application{
        if(!ExpressServer.server){
            const app = express();
            app.use(cors());
            app.use(express.json());
            app.use('', allRoutes)

            ExpressServer.server = app;
        }
        return ExpressServer.server;
    }
}