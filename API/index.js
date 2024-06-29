import express from 'express'
import dotenv from 'dotenv';
import db from './db.js'

import GetData from './getdata.js'

dotenv.config();

const app = express();
const port = process.env.PORT

const dt = async () => {
    return await GetData.find();
}

db.then(() => {
    console.log('base de datos conectada')
    app.listen(port, () => {
        console.log('Conectado');
    })
}).catch((err) => console.log(err))



app.get('/', (req, res) => {
    dt()
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})
