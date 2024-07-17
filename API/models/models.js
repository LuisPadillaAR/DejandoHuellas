import { Schema, model } from "mongoose";

const specie = new Schema([
    {
        name: String,
        breed: Array
    }
])

const patient = new Schema([
    {
       name: String,
       species: String,
       breed: String,
       color: String,
       rescue_date: String,
       size: String,
       weight: String,
       age: String,
       attentions: Array
    }
])

const attention = new Schema([
    {
        patient: String,
        attentions: Array
    }
])

const createAttention = new Schema([
    {
        date: String,
        operation: String, 
        description: String,
        volunteer: String,
        observations: String,
        place: String
    }
])

const users = new Schema([
    {
        user: String,
        email: String,
        password: String
    }
])

export const ModelEspecie = model('especies', specie)
export const ModelPatient = model('pacientes', patient)
export const ModelAttention = model('atenciones', attention)
export const ModelUser = model('users', users)
