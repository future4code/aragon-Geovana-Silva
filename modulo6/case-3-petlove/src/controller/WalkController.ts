import { WalkBusiness } from "../business/WalkBusiness";
import { Request, Response } from "express";
import { ICreateWalkInputDTO, IGetWalksInputDBTO } from "../models/Walks";
import { BaseError } from "../errors/BaseError";

export class WalkController {
    constructor(
        private walkBusiness: WalkBusiness
    ) {}

    public createWalk = async (req: Request, res: Response) => {
        try {
            const input: ICreateWalkInputDTO = {
                appointment_date: req.body.appointment_date,
                duration: req.body.duration,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                number_of_pets: req.body.number_of_pets,
                start_time: req.body.start_time,
                end_time: req.body.end_time
            }

            const response = await this.walkBusiness.createWalk(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Unexpected error creating tour" })
        }
    }

    public getWalks = async (req: Request, res: Response) => {
        try {
            const input: IGetWalksInputDBTO = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.walkBusiness.getWalks(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Unexpected error fetching tours" })
        }
    }
}