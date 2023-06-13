import app from './app.js';

const PORT = 3000;

//escutar a porta 3000 - função de callback
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
});
