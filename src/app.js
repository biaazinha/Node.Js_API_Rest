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
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

//criar rota padrão ou raiz - GET
app.get('/', (req, res) => {
    res.send('Hello word!');   //rota padrão de response(resposta)
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
});

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    // 201 - sucesso na criação
    res.status(201).send('Seleção cadastrada com sucesso');
});

//exportando a constante 
export default app;