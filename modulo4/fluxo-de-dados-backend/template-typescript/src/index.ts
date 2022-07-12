import express, { Request, Response } from "express"
import cors from "cors"
import { PRODUCTS, products } from "./data"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is working!")
})

// //1
app.get("/test", (req: Request, res: Response) => {
    try{
        res.status(200).send({ message: "Test performed successfully!" })
    }catch(err){
        res.status(500).send({ message: err.message})
    }
})

// //3
app.get("/products", (req: Request, res: Response) => {
    try{
        res.status(200).send(products)
    } catch (err){
        res.status(500).send({ message: err.message})
    }
})

// //4
app.post("/products", (req: Request, res: Response) => {
    try{
        const {name, price} = req.body
        const newProduct: PRODUCTS = {
            id: Date.now().toString(),
            name: name,
            price: price
        }
        if(name === "" || price === null){
            res.statusCode = 400
            throw new Error("Invalid request! The presence of the price and name is mandatory.")
        }
        if(typeof name !== "string"){
            res.statusCode = 400
            throw new Error("Invalid typing! The name must be of type string.")
        }
        if(typeof price !== "number"){
            res.statusCode = 400
            throw new Error("Invalid typing! The price must be of type number.")
        }
        if(price <= 0){
            res.statusCode = 400
            throw new Error("Invalid request! The price must be greater than zero.")
        }
        products.push(newProduct)
        res.status(201).send({
            message: "New product successfully added!",
            products: newProduct
        })
    }catch(err){
        res.status(500).send({message: err.message})
    }
})

// //5
app.put("/products/:id", (req: Request, res: Response) => {
    try{
    const id = (req.params.id)
    const {price} = req.body
    const i = products.findIndex(product => product.id === id)
    const updatedPrice = products.map(product => {
        if(i === -1){
            res.statusCode = 422
            throw new Error("ID does not exist. It is mandatory that you have an existing ID.")
        }
        if(price === null){
            res.statusCode = 422
            throw new Error("Price does not exist. It is mandatory to enter a price.")
        }
        if(price <= 0){
            res.statusCode = 400
            throw new Error("Price must be greater than zero.")
        }
    })
    res.status(201).send({message: "Price updated sucessfully!", products: updatedPrice})
} catch(err){
    res.status(500).send({message: err.message})
}
})

// //6
app.delete("/products/:id", (req: Request, res: Response) => {
    try{
        const id = (req.params.id)
        if(id !== ""){
            const i = products.findIndex(product => product.id === id)
            products.splice(i, 1)
            res.status(201).send({message: "Product successfully deleted!"})
        }else{
            res.statusCode = 404
            throw new Error("ID does not exist!")
        }
    }catch(err){
        res.status(500).send({message: err.message})
    }
})


