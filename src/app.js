//importar o express 
import express from 'express';
//criando uma instancia do express no app
const app = express();
//express tem que fazer a leitura do json caso esteja no corpo de uma requisição
app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'},
]

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
    selecoes.push(req.body);
    // 201 - sucesso na criação
    res.status(201).send('Seleção cadastrada com sucesso');
});

//GET - acessar rotas
//criar rota padrão ou raiz - GET
app.get('/', (req, res) => {
    res.send('Hello word!');   //rota padrão de response(resposta)
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req,res) => {
    res.json(buscarSelecaoPorId(req.params.id));
})

//PUT - atualizações e modificações de já existentes
app.put('/selecoes/:id', (req, res) => {
    let index = BuscaIndexSelecao(req.params.id);
    //o parametro selecao vai ficar no lugar do conteudo da selecao de acordo com o index do array
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
});

//DELETE - deletar
app.delete('/selecoes/:id', (req, res) => {
    let index = BuscaIndexSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`seleção com id ${req.params.id} excuida com sucesso`);
});

//exportando a constante 
export default app;