import DBConnection from "./DBConnection.js";
import * as dotenv from "dotenv"
dotenv.config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbSecret = process.env.DB_SECRET
const dbHost = process.env.DB_HOST
// console.log(dbName, dbUser, dbSecret, dbHost);
const connection = new DBConnection(dbName, dbUser, dbSecret, dbHost)
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