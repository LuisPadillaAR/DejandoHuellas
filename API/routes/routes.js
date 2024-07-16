
import { Router } from "express"
import { createPatient, deletePatient, getAll, getPatientId, updatePatient  } from "../controllers/controller.js";
import { deleteAttention, getAllA, getAttentionId } from "../controllers/controllerAtt.js";
import { getUsers } from "../controllers/controllerUser.js";

export const routerMain = Router();
export const routerAttention = Router();
export const routerUsers = Router();


routerMain.get('/', getAll )
routerMain.get('/:id', getPatientId )
routerMain.put('/:id', updatePatient)
routerMain.delete('/:id', deletePatient)
routerMain.post('/create', createPatient)

routerAttention.get('/', getAllA )
routerAttention.get('/:id',getAttentionId)

routerUsers.get('/:user', getUsers)


