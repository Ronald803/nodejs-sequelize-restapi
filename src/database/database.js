import Sequelize from 'sequelize'

import {config} from '../../config/config.js'

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//console.log({URI});
export const sequelize = new Sequelize(
    "postgres://nico:admin123@localhost:5432/my_store",
    {
        dialect: 'postgres' ,
        logging: false,
    }
)
