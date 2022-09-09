import { Router } from 'express'
import { WalkBusiness } from '../business/WalkBusiness'
import { WalkController } from '../controller/WalkController'
import { WalkDatabase } from '../database/WalkDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { CalculatePrice } from '../utils/calculatePrice'
import { FormatHours } from '../utils/formatHours'

export const walkRouter = Router()

const walkController = new WalkController(
    new WalkBusiness(
        new WalkDatabase(),
        new IdGenerator(),
        new FormatHours(),
        new CalculatePrice()
    )
)

walkRouter.post("/", walkController.createWalk)
walkRouter.get("/", walkController.getWalks)

