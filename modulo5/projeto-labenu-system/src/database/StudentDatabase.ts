import { Student } from "../models/Students"
import { BaseDatabase } from "./BaseDatabase"

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

    public async getAllStudents() {
        const result = await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS)
            .select()
        return result
    }

    public async getStudentByName(name: string){
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()
        .where(`name`, `LIKE` ,`%${name}%`)
        return result
    }

    public async createStudent(student: Student){
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .insert(student)
        return result
    }

    public async updateClassroomStudent(id: string, newClassroomId: string){
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .update({classroom_id: newClassroomId})
        .where({id: id}) 
    }
}