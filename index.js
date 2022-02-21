// Importar o express
const express = require('express');

// Criar um servidor: app
const app = express();

// Definindo a pasta de arquivos estáticos
app.use(express.static(__dirname+'/public'));

// Criar uma rota "/" que vai enviar um arquivo views/index.html
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

// Rodar o servidor na porta 3000
app.listen(3000,()=>{console.log("Servidor rodando na porta 3000")})