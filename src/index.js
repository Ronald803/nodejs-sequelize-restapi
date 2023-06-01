import app from './app.js'
import {sequelize} from './database/database.js'

import './models/project.js' // importa el modelo project
import './models/task.js' // importa el modelo task

async function main(){
    try{
        //await sequelize.authenticate();
        //console.log('Connection has been established successfully');
        await sequelize.sync({force:true})
        app.listen(3000)
        console.log("Server is listening on port", 3000);
    }
    catch(error){
        console.error('Unable to connect to the database: ', error)
    }
}
main();