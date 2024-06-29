import mongoose, { Schema, model} from "mongoose";

const getdata = new Schema([
    {
        name: String,
        breed: Array
    }
])

export default model('especies', getdata)