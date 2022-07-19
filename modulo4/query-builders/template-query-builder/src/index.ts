import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createPerfumes } from "./endpoints/createPerfumes";
import { getPerfumes } from "./endpoints/getPerfumes";
import { updatePerfumes } from "./endpoints/updatePerfume";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

//Criar perfume
app.post("/perfumes", createPerfumes)

//Buscar perfume
app.get("/perfumes", getPerfumes)

//Mudar o preço do perfume
app.put("/perfumes/:id", updatePerfumes)

//Deletar um perfume
app.delete("/perfumes/:id", deletePerfume)