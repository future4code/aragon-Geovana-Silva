import express, {Request, Response} from "express"
import cors from "cors"
import {Users, users, Extract} from "./data"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is working!")
})

//EndPoint de criar conta
app.post("/users", (req:Request, res:Response) => {
    try{
        const {name, CPF, birth} = req.body

        if(!name || !CPF || !birth || name === "" || CPF === "" || birth === ""){
            res.statusCode = 422
            throw new Error("Doesn't exist! Please inform it!")
        }

        if(typeof name !== "string" || typeof CPF !== "string" || typeof birth !== "string"){
            res.statusCode = 422
            throw new Error("The property must be of type string!")
        }

        const birthYearToParse = Date.parse(birth)
        const birthYearToData = new Date(birthYearToParse)
        const birthYear:number = birthYearToData.getFullYear()
        const currentYearsToParse = new Date()
        const currentYearToData = new Date(currentYearsToParse)
        const currentYears:number = currentYearToData.getFullYear()
        const yearsOld = currentYears - birthYear
        console.log(yearsOld)
        if(yearsOld < 18){
            res.statusCode = 422
            throw new Error("The user cannot be a minor (<18).")
        }
//Parece que o cálculo não dá certo. Tentei usar o método subtr, mas o código não reconhece a função. Ela fica sublinahda.
        const indexCpf = users.findIndex(user => user.CPF === CPF)
            if(indexCpf > 0){
                res.statusCode = 409
                throw new Error("The CPF already exists! Please enter another.")
            }
        
        if(typeof name === "string" && name !== ""){
        const nameToSplit = name.split("")
            if(nameToSplit.length < 3){
                res.statusCode = 422
                throw new Error("The name must be at least 3 characters long.")
            }
        }

        const lastUser = users[users.length -1]

        const newUser:Users = {
            id: lastUser.id + 1,
            name: name,
            CPF: CPF,
            birth: birth,
            paymentList: [{
                amount: null,
                description: null,
                payday: null
            }],
            balance: 0
        }

        users.push(newUser)
        res.status(201).send({ message: "User created!" })
    } catch(err){
        res.status(500).send({ message: err.message})
    }
})

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
        const indexUser = users.findIndex(user => user.id === id)
        const balanceUser = users[indexUser].balance
        res.status(200).send({ user_balance: balanceUser })
    }catch(err){
        res.status(500).send({ message: err.message })
    }
})

//Endpoint de adicionar o saldo
app.post("users/:id", (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const balance = Number(req.body.balance)

        if(!id || !balance){
            res.statusCode = 422
            throw new Error("The property doesn't exist! Please inform it!")
        }

        if(typeof id !== "number" || typeof balance !== "number"){
            res.statusCode = 422
            throw new Error("The property must be of type number!")
        }

        if(balance <= 0){
            res.statusCode = 422
            throw new Error("The balance must be >0")
        }

        const indexId = users.findIndex(user => user.id === id)
            if(indexId < 0){
                res.statusCode = 422
                throw new Error("The ID doesn't exist! Please try again.")
            }
        
        const somaBalance = (users[indexId].balance) + balance
        users[indexId].balance = somaBalance
        //Const somabalance parece não querer somar com o balance
        res.status(201).send({ message: "Balance user updated!", User: users[indexId] })
    }catch(err){
        res.status(500).send({ message: err.message })
    }
})


//Endpoint de pagar a conta
app.put("/users/:id/pay", (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const amount = Number(req.body.amount)
        const {description} = req.body.description

        const indexId = users.findIndex(user => user.id === id)
            if(indexId < 0){
                res.statusCode = 422
                throw new Error("The ID doesn't exist! Please try again.")
            }
        
        if(!id || !amount || !description || description === ""){
            res.statusCode = 422
            throw new Error("The property doesn't exist! Please inform it!") 
        }

        if(typeof id !== "number" || typeof amount !== "number"){
            res.statusCode = 422
            throw new Error("ID must be a type number!")
        }

        if(typeof description !== "string"){
            res.statusCode = 422
            throw new Error("The property must be a type string!")
        }

        if(amount <= 0){
            res.statusCode = 422
            throw new Error("Amount must be >0")
        }
        
        const balance = users[indexId].balance

        if(amount > balance){
            res.statusCode = 422
            throw new Error("Account amount cannot be greater than total user's balance")
        }

        const today = new Date()
        const day = String(today.getDate()).padStart(2, "0")
        const month = String(today.getMonth()).padStart(2, "0")
        const year:number = today.getFullYear()
        const currentData = day + "/" + month + "/" + year

        const newExtract:Extract = {
            amount: amount,
            description: description,
            payday: currentData
        }
//Erro no amount acima quando coloco extract como type. Segue o readme!
        users[indexId].paymentList.push(newExtract)
        users[indexId].balance = users[indexId].balance - ammount
        
        res.status(201).send({ message: "Payment list is uptaded!", User: users[indexId] })
    }catch(err){
        res.status(500).send({ message: err.message })
    }
})

