
import { ModelUser } from '../models/models.js'

export const getUsers = async (req, res) => {
    try {
        const data = await ModelUser.find()
        const datas = data.find(e => e.user === req.params.user)
        

        if (!datas) {
            return res.status(404).json({ msg: 'no encontrado'});
        }
        return res.status(200).json(datas)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}


