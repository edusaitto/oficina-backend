const connection = require('./infra/connection');
const Database = require('./infra/database');
const express = require('express');
const router = require('./routes');
var cors = require('cors')

try {
    const app = express();
    const db = new Database();
    
    app.use(router);
    app.use(express.json());
    app.use(cors());
    app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
    app.listen('3001', () => {
        console.log('Servidor rodando na porta 3001')
    })
    
    db.init(connection);
    connection.query('USE oficina')
} catch (error) {
    console.log(error);
}