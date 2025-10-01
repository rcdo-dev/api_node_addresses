import { Router } from "express";
import {
    findOne,
    list,
} from "../controllers/LocalidadeController.js"

const router = Router()

router.get('/cidades/:nome', findOne)
router.get('/estados/:uf/cidades', list)

export default router;