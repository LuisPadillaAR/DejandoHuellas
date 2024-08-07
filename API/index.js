import express, { json } from 'express'
import dotenv from 'dotenv';
import db from './db.js'
import cors from 'cors'
import { routerAttention, routerMain, routerUsers } from './routes/routes.js';
dotenv.config();

const app = express();
const port = process.env.PORT


db.then(() => {
    console.log('base de datos conectada')
    app.listen(port, () => {
        console.log('Conectado');
    })
}).catch((err) => console.log(err))

app.use(cors())
app.use(json())

app.get('/',(req, res) => res.send('home'))

app.use('/patients', routerMain)
app.use('/attentions', routerAttention)
app.use('/users', routerUsers)
