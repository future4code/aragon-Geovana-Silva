import express, {Request, Response} from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import connection from "./database/connection";
import { getUsers } from "./endpoints/getUsers";
import { getTasks } from "./endpoints/getTasks";
import { getUsersForTasks } from "./endpoints/getUsersForTasks";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!
app.get(`/users`, getUsers)

app.get(`/tasks`, getTasks)

app.get(`/tasks/:taskId/users`, getUsersForTasks)