import express, {Request, Response} from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getTasks } from "./endpoints/getTasks";
import { getUsersForTasks } from "./endpoints/getUsersForTasks";
import { postUsersForTasks } from "./endpoints/postUsersForTasks";
import { deleteTasks } from "./endpoints/deleteTasks";
import { putStatusTasks } from "./endpoints/putStatusTasks";
import { putNickName } from "./endpoints/putNickName";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)



//Endpoint de buscar lista de usuários ---> OK
app.get(`/users`, getUsers)

//Endpoint de buscar tarefas ---> OK
app.get(`/tasks`, getTasks)

//Endpoint de buscar usuários responsáveis por uma tarefa ---> OK
app.get(`/tasks/:taskId/users`, getUsersForTasks)

//Endpoint de adicionar usuário responsável a uma tarefa
app.post(`/tasks/:taskId/users`, postUsersForTasks)

//Endpoint de editar apelido do usuário
app.put(`/users/:userId`, putNickName)

//Endpoint de editar status da tarefa
app.put(`/tasks/:taskId`, putStatusTasks)

//Endpoint de deletar uma tarefa ----> OK
app.delete(`/tasks/:taskId`, deleteTasks)