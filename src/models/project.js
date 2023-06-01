import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {Task} from './task.js'

export const Project = sequelize.define('projects',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false //por defecto viene en true, añade dos columnas en las que se tiene informacion de cuando fue creado esa fila y cuando fue modificado, si este parametro esta en falso entonces no aparecen esta dos columnas
}
);

/* Un proyecto puede tener muchas tareas, entonces el schema Task tendrá */
/* una columna llamada "projectId" la cual será la misma que la columna */
/*  "id" del esquema Project */
Project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey: 'id'
})

/* Una tarea pertenece a un proyecto, para lo cual el schema Task tendrá */
/* una columna llamada "projectId" la cual será la misma que la columna */
/*  "id" del schema Project  */
Task.belongsTo(Project,{
    foreignKey: 'projectId',
    targetId: 'id'
})