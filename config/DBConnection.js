import { Sequelize } from "sequelize";
class DBConnection {
    constructor(databaseName, user, password, host){
        this.databaseName = databaseName
        this.user = user
        this.password = password
        this.host = host
    }

    async connect(){
        const sequelize = new Sequelize(this.databaseName, this.user, this.password, {
            host: this.host,
            dialect: "mysql"
        })
        try {
            await sequelize.authenticate()
            console.log("Connected Successfully");
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default DBConnection