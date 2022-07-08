import express, {Request, Response} from "express"
import cors from "cors"
import {Users, users, extract} from "./data"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is working!")
})

//EndPoint de criar conta
// app.post("/users", (req:Request, res:Response) => {
//     try{
//         const {name, CPF, birth, amount, description, payday, balance} = req.body

//         if(!name && !CPF && !birth){
//             res.statusCode = 422
//             throw new Error("Doesn't exist! Please inform it!")
//         }

//         if(typeof name !== "string" || typeof CPF !== "string" || typeof birth !== "string"){
//             res.statusCode = 422
//             throw new Error("The property must be of type string!")
//         }

//         if(typeof birth === "string"){
//         const birthYearToParse:any = Date.parse(birth)
//         // for(let i = 0; i < birthYearToData.length; i++){
//         //     let date = birthYearToData[i]
//         //     let newDate = new Date(date)
//         //     birthYearToData[i] = newDate.getFullYear()
//         // }
//         const birthYearToData = new Date(birthYearToParse)
//         const birthYear:number = birthYearToData.getFullYear()
//         const currentYearsToParse:any = new Date()
//         // for(let i = 0; i < currentYearsToData.length; i++){
//         //     let date = currentYearsToData[i]
//         //     let newDate = new Date(date)
//         //     currentYearsToData[i] = newDate.getFullYear()
//         // }
//         const currentYearToData = new Date(currentYearsToParse)
//         const currentYears:number = currentYearToData.getFullYear()
//         const yearsOld = currentYears - birthYear
//         if(yearsOld < 18){
//             res.statusCode = 422
//             throw new Error("The user cannot be a minor (<18).")
//         }}

//         const indexCpf = users.findIndex(user => user.CPF === CPF)
//             if(indexCpf > 0){
//                 res.statusCode = 409
//                 throw new Error("The CPF already exists! Please enter another.")
//             }

//         const nameToSplit = name.split("")
//             if(nameToSplit.length < 3){
//                 res.statusCode = 422
//                 throw new Error("The name must be at least 3 characters long.")
//             }

//         const lastUser = users[users.length -1]
//         const newUser:Users = {
//             id: lastUser.id + 1,
//             name: name,
//             CPF: CPF,
//             birth: birth,
//             paymentList: [{
//                 amount: amount,
//                 description: description,
//                 payday: payday
//             }],
//             balance: balance
//         }
//         users.push(newUser)
//         res.status(201).send({ message: "User created!" })
//     } catch(err){
//         res.status(500).send({ message: err.message})
//     }
// })

//Endpoint de pegar o saldo
app.get("/users/:id", (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        if(!id){
            res.statusCode = 422
            throw new Error("ID doesn't exist! Please inform ID.")
        }
        const indexId = users.findIndex(user => user.id === id)
            if(indexId < 0){
                res.statusCode = 422
                throw new Error("The ID doesn't exist! Please try again.")
            }
            const retorna = users.filter((user) => {
                return user.balance
            })
        res.status(200).send({ user_balance: retorna })
    }catch(err){
        res.status(500).send({ message: err.message })
    }
})

//Endpoint de adicionar o saldo


//Endpoint de pagar a conta

