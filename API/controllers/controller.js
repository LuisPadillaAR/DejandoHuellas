

import { ModelPatient } from "../models/models.js";

export const getAll = async (req, res) => {
    try {
        const data = await ModelPatient.find()

        if (!data) {
            return res.status(404).json({ msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

export const getPatientId= async (req, res) => {
    try {
        const data = await ModelPatient.findById(req.params.id)

        if (!data) {
            return res.status(404).json({ msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

export const updatePatient= async (req, res) => {
    try {
        const data = await ModelPatient.findByIdAndUpdate(req.params.id, req.body)

        if (!data) {
            return res.status(404).json({ msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

export const deletePatient = async (req, res) => {
    try {
        const data = await ModelPatient.findById(req.params.id)

        if (!data) {
            return res.status(404).json({ msg: 'no puede ser eliminado, no existe'});
        }

        await ModelPatient.findByIdAndDelete(req.params.id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}