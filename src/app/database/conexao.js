import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Bb.1108041915',
    database: 'bdcopa'
});

conexao.connect()

export default conexao
