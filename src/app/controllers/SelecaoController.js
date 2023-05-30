import conexao from '../database/conexao.js';

class SelecaoController {

    //listar tudo
    index(req, res) {
        const sql = "SELECT * FROM selecoes;";
        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                console.log(erro);
                res.status(404).json({'erro': erro});
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    //listar tudo por id
    show(req,res) {
        const id = req.params.id;
        const sql = "SELECT * FROM selecoes WHERE id=?;";
        conexao.query(sql, id, (erro, resultado) => {
            // primeira posição pois só vai ter um resultado ou nenhum
            const linha = resultado[0];
            if(erro) {
                console.log(erro);
                res.status(404).json({'erro': erro});
            } else {
                res.status(200).json(linha);
            }
        });
    }

    //criar dados
    store(req, res) {
        const selecao = req.body;
        const sql = "INSERT INTO selecoes SET?;";
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) {
                console.log(erro);
                //404 - não localizado
                res.status(404).json({'erro': erro});
            } else {
                // 201 - sucesso na criação 
                res.status(201).json(resultado);
            }
        });
    }

    //atualiza dados
    update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const sql = "UPDATE selecoes SET? WHERE id=?;";
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if(erro) {
                console.log(erro);
                res.status(404).json({'erro': erro});
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    //apagar dados
    delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, resultado) => {
        if(erro) {
            console.log(erro);
            res.status(404).json({'erro': erro});
        } else {
            res.status(200).json(resultado);
        }
    });
    }

}

//padrão Singletoon
export default new SelecaoController()