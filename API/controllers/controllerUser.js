
import { ModelUser } from '../models/models.js'

export const getUsers = async (req, res) => {
    try {
        const data = await ModelUser.find()
        console.log(data);

        if (!data) {
            return res.status(404).json({ msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}


