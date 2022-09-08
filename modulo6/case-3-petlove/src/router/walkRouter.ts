import { Router } from 'express'
import { WalkBusiness } from '../business/WalkBusiness'
import { WalkController } from '../controller/WalkController'
import { WalkDatabase } from '../database/WalkDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const walkRouter = Router()

// const walkController = new WalkController(
//     new WalkBusiness(
//         new WalkDatabase(),
//         new IdGenerator(),
//         new HashManager(),
//         new Authenticator()
//     )
// )
