import { DataTypes, Model } from "sequelize";
import DBConnection from "../config/DBConnection.js";

import * as dotenv from "dotenv"
dotenv.config()

const connection = new DBConnection(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_SECRET, 
    process.env.DB_HOST
)

const sequelize = await connection.connect()


class Book extends Model {}

const BookModel = Book.init({
    book_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    editor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edition: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bought_year: {
        type: DataTypes.DATE
    },
    price_bought: {
        type: DataTypes.REAL,
        allowNull: true
    },
    review_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true,
        // set(value){
        //     return this.setDataValue('tags', value.join(","))
        // }
    },
    read: {
        type: DataTypes.TINYINT,
        allowNull: true
    }
},
{
    sequelize,
    timestamps: false
}
)

export default BookModel