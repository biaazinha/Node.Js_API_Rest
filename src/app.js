//importar
import express from 'express';
import routes from './routes.js'

//criando uma instancia do express no app
const app = express();

//express tem que fazer a leitura do json caso esteja no corpo de uma requisição
app.use(express.json());

//usar o router 
app.use(routes)

//exportando a constante 
export default app;
