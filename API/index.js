import express, { json } from 'express'
import dotenv from 'dotenv';
import db from './db.js'
import { ModelEspecie, ModelPatient, ModelAttention } from './models/models.js';
import cors from 'cors'
dotenv.config();

const app = express();
const port = process.env.PORT

const dt = async (bb) => {
    return await bb.find();
}

db.then(() => {
    console.log('base de datos conectada')
    app.listen(port, () => {
        console.log('Conectado');
    })
}).catch((err) => console.log(err))


app.get('/',(req, res) => res.send('home'))


app.get('/species', (req, res) => {
    dt(ModelEspecie)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

app.get('/patients', (req, res) => {
    dt(ModelPatient)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

app.get('/attention', (req, res) => {
    dt(ModelAttention)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

app.use(cors())
app.use(json())