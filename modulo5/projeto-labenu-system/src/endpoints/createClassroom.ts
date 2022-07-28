import { Request, Response } from "express"
import { IClassroomDB } from "../models/Classroom"
import { ClassroomDatabase } from "../database/ClassroomDatabase"

export const createClassroom = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string
        const module = req.body.module as string
        // const students = [] as string[]

        const classroom: IClassroomDB = {
            id: Date.now().toString(),
            name: name,
            module: module
        }

        const classroomDatabase = new ClassroomDatabase()
        await classroomDatabase.createClassroom(classroom)

        res.status(201).send({ message: "Classroom created!", classroom: classroom })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}