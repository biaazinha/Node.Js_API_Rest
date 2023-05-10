//importar o express 
const express = require('express');
//criando uma instancia do express no app
const app = express();
//definindo uma porta para o projeto 
const port = 3000;

//criar rota padrão ou raiz - GET
app.get('/', (req, res) => {
    res.send('Hello word!');   //rota padrão de response(resposta)
});

//escutar a porta 3000 - função de callback
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
});
