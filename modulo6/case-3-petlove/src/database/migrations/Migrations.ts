import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { WalkDatabase } from "../WalkDatabase"
import { tours, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        DROP TABLE IF EXISTS ${WalkDatabase.TABLE_WALKS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${WalkDatabase.TABLE_WALKS}(
            id VARCHAR(255) PRIMARY KEY,
            status ENUM("PENDING", "INPROGRESS", "CONCLUDED") DEFAULT "PENDING",
            appointment_date DATE NOT NULL,
            price INT NOT NULL,
            duration ENUM("MEIAHORA", "HORA"),
            latitude INT NOT NULL,
            longitude INT NOT NULL,
            number_of_pets INT NOT NULL,
            start_time VARCHAR(5) NULL,
            end_time VARCHAR(5) NOT NULL,
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(WalkDatabase.TABLE_WALKS)
            .insert(tours)
    }
}

const migrations = new Migrations()
migrations.execute()