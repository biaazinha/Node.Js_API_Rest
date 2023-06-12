import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelecaoController {

    //listar tudo
    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    //listar tudo por id
    async show(req,res) {
        const id = req.params.id;
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }

    //criar dados
    async store(req, res) {
        const selecao = req.body;
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }

    //atualiza dados
    async update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
    }

    //apagar dados
    async delete(req, res) {
        const id = req.params.id;
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}

//padrão Singletoon
export default new SelecaoController()