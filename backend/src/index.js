const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
/**
 * Request JSON:
 * Necessário para capturar o corpo da requisição POST
 */
app.use(express.json());
app.use('/api/v1', routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar informações do backend
 * POST: Criar um informação no backend
 * PUT: Atualizar uma informação no backend
 * DELETE: Excluir uma informação no backend
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados viado pela URL após "?" (filtros, paginação)
  * Route Params: Parâmetros usado para identificar recursos
  */

  /**
   * Bancos de Dados:
   * SQL: MySQL, MySQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB
   * 
   * Driver: SELECT * FROM
   * Query Builder: table('user').select('*').where()
   * 
   * KNEX.js: query builder
   */


app.listen(3333);