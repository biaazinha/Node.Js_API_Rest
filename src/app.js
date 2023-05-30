//importar
import express from 'express';
import SelecaoController from './app/controllers/SelecaoController.js';

//criando uma instancia do express no app
const app = express();
//express tem que fazer a leitura do json caso esteja no corpo de uma requisição
app.use(express.json());

//ROTAS

//GET - acessar rotas
app.get('/selecoes', SelecaoController.index);
app.get('/selecoes/:id', SelecaoController.show);

//POST - criar um novo ou adicionar
app.post('/selecoes', SelecaoController.store);

//PUT - atualizações e modificações de já existentes
app.put('/selecoes/:id', SelecaoController.update);

//DELETE - deletar
app.delete('/selecoes/:id', SelecaoController.delete);

//exportando a constante 
export default app;
