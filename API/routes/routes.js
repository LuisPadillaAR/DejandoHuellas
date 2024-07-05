
import { Router } from "express"
import { getAll, getPatientId, updatePatient  } from "../controllers/controller.js";

const routerMain = Router();


routerMain.get('/', getAll )
routerMain.get('/:id', getPatientId )
routerMain.put('/:id', updatePatient)

export default routerMain;
