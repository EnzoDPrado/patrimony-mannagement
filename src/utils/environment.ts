import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = {
    DATABASE:{
        USER: process.env.DB_USER || '',
        HOST: process.env.DB_HOST || '',
        PORT: Number(process.env.DB_PORT) || 0,
        DATABASE: process.env.DB_DATABASE || '',
        PASSWORD: process.env.DB_PASSWORD || ''
    },

    SERVER: {
        PORT: process.env.PORT || 3001
    }
}