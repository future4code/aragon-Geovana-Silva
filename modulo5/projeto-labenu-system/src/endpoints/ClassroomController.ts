import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createClassroom(req: Request, res: Response){
        let errorCode = 400
        try {
            const name = req.body.name as string
            const module = req.body.module as string

            const classroom = new Classroom (
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassroom(classroom)

            res.status(201).send({ message: "Classroom created!", classroom: classroom })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateModuleClassroom(req: Request, res: Response){
        let errorCode = 400
        try {
            const id = req.params.classroomId as string
            const module = req.body.module as string

            if (!module) {
            throw new Error("Missing parameters");
            }

            const classroomDatabase = new ClassroomDatabase();
            await classroomDatabase.updateModuleClassroom(id, module);

        res.status(200).send({ message: "Module updated successfully" });
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    
    public async getActiveClassrooms(req: Request, res: Response){
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getActiveClassrooms()
            
            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}