
import { Router } from "express"
import { getAll, getPatientId  } from "../controllers/controller.js";

const routerMain = Router();


routerMain.get('/', getAll )
routerMain.get('/:id', getPatientId )

export default routerMain;
