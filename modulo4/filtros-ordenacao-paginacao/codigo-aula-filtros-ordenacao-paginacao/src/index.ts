import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";
import { postProducts } from "./endpoints/postProducts";
import { putProducts } from "./endpoints/putProducts";
import { deleteProduct } from "./endpoints/deleteProduct";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

// Get products
app.get("/products", getProducts)

// Post products
app.post("/products", postProducts)

// Put products
app.put("/products/:id", putProducts)

// Delete products
app.delete("/products/:id", deleteProduct)
