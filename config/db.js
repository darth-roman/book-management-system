import DBConnection from "./DBConnection.js";

const connection = new DBConnection("romandb", "root", "0799959010", "localhost")
await connection.connect()

/**
 * import { Sequelize } from "sequelize";
 * 
    // Leaving this as a second option to connect to Database
    const sequelize = new Sequelize("romandb", "root", "0799959010", {
        host: "localhost",
        dialect: "mysql"
    })
    try{
        await sequelize.authenticate()
        console.log(`Connected Successfully`);
    }catch(error) {
        console.error(`Unable to connected: ${error}`);
    }
*/