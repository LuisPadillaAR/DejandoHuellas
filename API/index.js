import express from 'express'
import dotenv from 'dotenv';
import db from './db.js'

dotenv.config();

const app = express();
const port = process.env.PORT



db.then(() => {
    console.log('base de datos conectada')
    app.listen(port, () => {
        console.log('Conectado');
    })
}).catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({name: 'Luis Padilla', age: 23})
})