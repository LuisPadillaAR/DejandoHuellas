
import { Router } from "express"
import { createPatient, deletePatient, getAll, getPatientId, updatePatient  } from "../controllers/controller.js";

const routerMain = Router();


routerMain.get('/', getAll )
routerMain.get('/:id', getPatientId )
routerMain.put('/:id', updatePatient)
routerMain.delete('/:id', deletePatient)
routerMain.post('/create', createPatient)

export default routerMain;
