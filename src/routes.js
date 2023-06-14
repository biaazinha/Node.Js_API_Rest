import { Router } from 'express';
import SelecaoController from './app/controllers/SelecaoController';

const router = Router()

//ROTAS

//GET - acessar rotas
router.get('/selecoes', SelecaoController.index);
router.get('/selecoes/:id', SelecaoController.show);

//POST - criar um novo ou adicionar
router.post('/selecoes', SelecaoController.store);

//PUT - atualizações e modificações de já existentes
router.put('/selecoes/:id', SelecaoController.update);

//DELETE - deletar
router.delete('/selecoes/:id', SelecaoController.delete);

export default router
