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

export const ModelEspecie = model('especies', specie)
export const ModelPatient = model('pacientes', patient)