import { Schema, model } from "mongoose";

const especie = new Schema([
    {
        name: String,
        breed: Array
    }
])

export const ModelEspecie = model('especies', especie)