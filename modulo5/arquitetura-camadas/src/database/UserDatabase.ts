import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public getAllUsers = async (
        search: string | undefined,
        sort: string,
        limit: number,
        offset: number
    ) => {
        let result: IUserDB[] = []
        if (search) {
            result = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .select()
                .where(`name`, "LIKE", `%${search}%`)
                .orderBy(`name`, sort)
                .limit(limit)
                .offset(offset)
        } else {
            result = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .select()
        }
        return result
    } 

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })
        return result[0]
    }

    public findById = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })
        return result[0]
    }

    public checkExistsId = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })
        return result[0] ? true : false
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({ id })
    }
}