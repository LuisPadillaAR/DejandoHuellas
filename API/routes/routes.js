
import { Router } from "express"
import { deletePatient, getAll, getPatientId, updatePatient  } from "../controllers/controller.js";

const routerMain = Router();


routerMain.get('/', getAll )
routerMain.get('/:id', getPatientId )
routerMain.put('/:id', updatePatient)
routerMain.delete('/:id', deletePatient)

export default routerMain;
