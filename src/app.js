//importar
import express from 'express';
import conexao from '../infra/conexao.js';
//criando uma instancia do express no app
const app = express();
//express tem que fazer a leitura do json caso esteja no corpo de uma requisição
app.use(express.json());

function buscarSelecaoPorId(id){
    // retornar da seleções os dados filtrados - retornar o objeto por id
    return selecoes.filter(selecao => selecao.id == id);
}

function BuscaIndexSelecao(id){
    // pegar a posição ou index do elemento no array por id
    return selecoes.findIndex(selecao => selecao.id == id);
}

//POST - criar um novo ou adicionar
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?;";
    conexao.query(sql, selecao, (erro, resultado) => {
        if(erro) {
            console.log(erro);
            //400 - requisição não atendida
            res.status(400).json({'erro': erro});
        } else {
            // 201 - sucesso na criação 
            res.status(201).json(resultado);
        }
    });
});

//GET - acessar rotas
//Rotas
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes;";
    conexao.query(sql, (erro, resultado) => {
        if(erro) {
            console.log(erro);
            //404 - não localizado
            res.status(404).json({'erro': erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.get('/selecoes/:id', (req,res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, resultado) => {
        // primeira posição pois só vai ter um resultado ou nenhum
        const linha = resultado[0];
        if(erro) {
            console.log(erro);
            //404 - não localizado
            res.status(404).json({'erro': erro});
        } else {
            res.status(200).json(linha);
        }
    });
})

//PUT - atualizações e modificações de já existentes
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "UPDATE selecoes SET? WHERE id=?;";
    conexao.query(sql, [selecao, id], (erro, resultado) => {
        if(erro) {
            console.log(erro);
            //400 - requisição não atendida
            res.status(400).json({'erro': erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

//DELETE - deletar
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, resultado) => {
        if(erro) {
            console.log(erro);
            //404 - não localizado
            res.status(404).json({'erro': erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

//exportando a constante 
export default app;