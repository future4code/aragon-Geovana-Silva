import { Request, Response } from "express";
import { StudentDatabase } from "../database/StudentDatabase";
import { Student } from "../models/Students";

export class StudentController {
    public async getAllStudents(req: Request, res: Response) {
        let errorCode = 400
        try {
            const name = req.query.name as string

            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getAllStudents(name)

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createStudent(req: Request, res: Response){
        let errorCode = 400
        try {
            const name = req.body.name
            const email =  req.body.email
            const birthdate =  req.body.birthdate
            const classroom_id = req.body.classroom_id

            const student = new Student (
                Date.now().toString(),
                name,
                email,
                new Date(birthdate),
                classroom_id
            )

            const studentDatabase = new StudentDatabase()
            await studentDatabase.createStudent(student)

            res.status(201).send({ message: "Student created!", student: student })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateClassroomStudent(req: Request, res: Response){
        let errorCode = 400
        try {
            const id = req.params.studentId as string
            const classroom_id = req.body.classroom_id as string

            if (!classroom_id){
            throw new Error("Missing parameters");
            }

            const studentDatabase = new StudentDatabase();
            await studentDatabase.updateClassroomStudent(id, classroom_id);

        res.status(200).send({ message: "ClassroomID updated successfully" })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}