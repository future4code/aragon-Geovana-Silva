import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO, IRemoverTicketsInputDTO, IReservationTicketsInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                starts_at: req.body.starts_at
            }
            
            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar o show" })
        }
    }

    public reservationTickets = async (req: Request, res: Response) => {
        try {
            const input: IReservationTicketsInputDTO = {
                token: req.headers.authorization,
                show_id: req.params.id
            }

            const response = await this.showBusiness.reservationTickets(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao reservar ticket" })
        }
    }

    public removeReservationTickets = async (req: Request, res: Response) => {
        try {
            const input: IRemoverTicketsInputDTO = {
                token: req.headers.authorization,
                show_id: req.params.id
            }

            const response = await this.showBusiness.removerReservationTickets(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao remover reserva do ticket" })
        }
    }
}