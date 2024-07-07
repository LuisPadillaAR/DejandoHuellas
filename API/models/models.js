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
       age: String
    }
])

const attention = new Schema([
    {
        patient: String,
        attentions: Array
    }
])

export const ModelEspecie = model('especies', specie)
export const ModelPatient = model('pacientes', patient)
export const ModelAttention = model('atenciones', attention)