import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IUserDB, User } from "../../src/models/User"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        switch(email) {
            case "astrodev@gmail.com":
                return {
                    id: "101",
                    name: "Astrodev",
                    email: "astrodev@gmail.com",
                    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
                }
            default:
                return undefined 
        }
    }

    public createUser = async (user: User) => {

    }
} 