import express, { Request, Response } from "express"
import cors from "cors"
import { afazeres, AFAZERES } from "./lista"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor funciona!")
})

//////// TODAS AS ATIVIDADES ESTÃO DANDO ERRO NO QUERY E SEND

// //1
app.get("/Ping", (req: Request, res: Response) => {
    res.send("Pong")
})

// //3
app.get("/afazeres/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const retorna = afazeres.filter((afazer) => {
        return afazer.userId === userId
    })
    res.send({
        afazeres: retorna
    })
})

// //4
app.post("/afazeres", (req: Request, res: Response) => {
    const { userId, title} = req.body
    const ultimoAfazer = afazeres[afazeres.length - 1]
    const novoAfazer: AFAZERES = {
        userId: userId,
        id: ultimoAfazer.id + 1,
        title: title,
        completed: false
    }
    afazeres.push(novoAfazer)
    res.send({
        mensage: "Nova tarefa criada com sucesso",
        afazeres: novoAfazer
    })
})

// //5
app.put("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {title} = req.body
    const updateTitle = afazeres.map(afazer => {
        if(afazer.id === id){
            return {...afazer, title: title}
        }else{
            return afazer
        }
    })
    afazeres = updateTitle
    const updateUser = afazeres.filter(afazer => afazer.id === id)
    res.status(201).send({mensage: "Tarefa alterada com sucesso!", user: updateUser[0]})
})

// //6
app.delete("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const i = afazeres.findIndex((afazer) => {
        return afazer.id === id
    })
    if(i === -1){
        return res.send({
            mensage: "Tarefa não encontrado",
            id: id
        })
    }
    afazeres.splice(i, 1)
    res.send({
        mensage: "Tarefa deletada com sucesso!",
        afazeres: afazeres
    })
})

// //7
app.get("/afazeres", (req: Request, res: Response) => {
    const busca = req.query.busca

    if(busca !== "true" && busca !== "false"){
        return res.send({
            busca: busca,
            afazeres: afazeres
        })
    }
    if(busca === "true"){
        const retorna =  afazeres.filter((afazer) => {
            return afazer.completed === true
        })
        return res.send({
            afazeres: retorna,
            busca: busca
        })
    } else {
        const retorna = afazeres.filter((afazer) => {
            return afazer.completed === false
        })
        return res.send({
            afazeres: retorna,
            busca: busca
        })
    }
})

