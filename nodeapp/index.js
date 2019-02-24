/*
  ================================================================
  Braspag DevOps Challenge 2019
  ================================================================
  Esta pequena aplicação escrita em Node.js armazena o número de 
  visitantes em uma instância do Redis
  ================================================================
  Não é necessário alterar nenhuma das linhas do código abaixo
  ================================================================
*/

const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visitantes', 0);

app.get('/', (req, res) => {
  client.get('visitantes', (err, visits) => {
    res.send('Número de visitantes: ' + visits);
    client.set('visitantes', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Escutando na porta 8081');
});
