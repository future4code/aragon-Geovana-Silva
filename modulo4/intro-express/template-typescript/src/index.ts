import express, {Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

// //1
app.listen(3003, () => console.log("O servidor está funcionando!"))

// //2
type USERS = {
    id: number,
    name: string,
    phone: number,
    email: string
}
const users:USERS[] = [
    {
        id: 1,
        name: "Lavinia Oliveira",
        phone: 31999999999,
        email: "lavinia@email.com"
    },
    {
        id: 2,
        name: "Paula Gaspar",
        phone: 31989898989,
        email: "paula.gaspar@email.com"
    },
    {
        id: 3,
        name: "Lucas Damasceno",
        phone: 31565656565,
        email: "lucas.d@email.com"
    }
]

// //3
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

// //4
app.get("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = users.filter(user => user.id === id)
    res.status(200).send(user)
})

// //5
app.put("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {phone} = req.body
    const updatePhone = users.map(user => {
        if(user.id === id){
            return {...user, phone: phone}
        }else{
            return user
        }
    })
    users = updatePhone
    const updateUser = users.filter(user => user.id === id)
    res.status(201).send({mensage: "Number updated sucessfully!", user: updateUser[0]})
})

// //6
app.delete("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const i = users.findIndex(user => user.id === id)
    users.splice(i, 1)
    res.status(200).send(users)
})


