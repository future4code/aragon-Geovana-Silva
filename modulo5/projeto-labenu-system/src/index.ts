import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
import { StudentController } from './endpoints/StudentController'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentController = new StudentController()

app.get("/ping", pingController.ping)

//GETS
//GetAllClassrooms
app.get("/classrooms", classroomController.getAllClassrooms)
//GetActiveClassrooms ----> 2
app.get("/classroomsActives", classroomController.getActiveClassrooms)
//GetAllStudentsORNameStudents ----> 5
app.get("/students", studentController.getAllStudents)

//POSTS
//CreateClassrooms ----> 1
app.post("/classrooms", classroomController.createClassroom)
//CreateStudents ----> 4
app.post("/students", studentController.createStudent)

//PUTS
//UpdateModuleClassrooms ----> 3
app.put("/classrooms/:classroomId", classroomController.updateModuleClassroom)
//UpdateClassroomStudents ----> 6
app.put("/students/:studentId", studentController.updateClassroomStudent)