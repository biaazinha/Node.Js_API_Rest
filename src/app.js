//importar o express 
import express from 'express';
//criando uma instancia do express no app
const app = express();

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

//exportando a constante 
export default app;