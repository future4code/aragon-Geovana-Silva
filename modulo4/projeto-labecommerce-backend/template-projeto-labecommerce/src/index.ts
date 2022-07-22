import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'
import { deleteUser } from './endpoints/deleteUser'
import { newPurchases } from './endpoints/newPurchases'
import { getPurchases } from './endpoints/getPurchases'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/users", createUser)

app.get("/users", getUsers)

app.post("/products", createProduct)

app.get("/products", getProducts)

app.post("/purchases", newPurchases)

app.get("/users/:user_id/purchases", getPurchases)

app.delete("/users/:id", deleteUser)