import { Classroom } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
        return result
    }

    public async createClassroom(classroom: Classroom){
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert(classroom)
        return result
    }

    public async updateModuleClassroom(id:string, newModule:string){
        await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .update({module: newModule})
        .where({id: id})
    }

    public async getActiveClassrooms(){
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .where(`module`, `!=`, `0`)
        .orWhere(`module`, `IS NOT NULL`)
        return result
    }
}