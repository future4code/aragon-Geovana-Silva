import { ShowDatabase } from "../database/ShowDatabase"
import { ConflictError } from "../errors/ConflictError"
import { ForbiddenError } from "../errors/ForbiddenError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowInputDBTO, ICreateShowInputDTO, ICreateShowOutputDTO, IRemoverTicketsInputDTO, IRemoverTicketsOutputDTO, IReservationTicketsInputDBTO, IReservationTicketsInputDTO, IReservationTicketsOutputDTO, ITicketDB } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const {token, band, starts_at} = input

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new UnauthorizedError("Token inválido ou faltando")
        }

        const role = payload.role
        if ( role === "NORMAL") {
            throw new ForbiddenError("Usuário cadastrado, mas sem permissão");
        }

        const day = new Date(starts_at).getDate()
        const month = new Date(starts_at).getMonth() + 1
        const year = new Date(starts_at).getFullYear()

        if(day < 5 || month < 12 || year < 2022){
            throw new RequestError("Data inferior ao início do evento");
        }

        if(day > 11 || month > 12 || year > 2022){
            throw new RequestError("Data superior ao limite do evento");
        }

        const id = this.idGenerator.generate()
        const date = new Date(starts_at)

        const isExistsShow =  await this.showDatabase.findShowByDate(date)
        if(isExistsShow){
            throw new ConflictError("O show já existe"); 
        }

        const show: ICreateShowInputDBTO = {
            id,
            band,
            starts_at: date
        }

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso!"
        }
        return response
    }


    //VER COMO FAZ A VALIDAÇÃO DO LIMITE DE TICKETS (5000)
    public reservationTickets = async (input: IReservationTicketsInputDTO) => {
        const {token, show_id} = input

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new UnauthorizedError("Token inválido ou faltando")
        }

        const showDB = this.showDatabase.findShowById(show_id)
        if(!showDB){
            throw new NotFoundError("Show não encontrado")
        }

        const isAlreadyTicketReservationByShow = await this.showDatabase.findReservationByShow(
            show_id,
            payload.id
        )
        if(isAlreadyTicketReservationByShow){
            throw new ConflictError("Você já reservou esse show, tente outra")
        }

        const ticketDB: IReservationTicketsInputDBTO = {
            id: this.idGenerator.generate(),
            show_id: show_id,
            user_id: payload.id
        }

        await this.showDatabase.reservationTickets(ticketDB)

        const response: IReservationTicketsOutputDTO = {
            message: "Ticket reservado com sucesso!"
        }
        return response
    }

    public removerReservationTickets = async (input: IRemoverTicketsInputDTO) => {
        const {token, show_id} = input

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new UnauthorizedError("Token inválido ou faltando")
        }

        const showDB = this.showDatabase.findShowById(show_id)
        if(!showDB){
            throw new NotFoundError("Show não encontrado")
        }

        const isAlreadyTicketReservationByShow = await this.showDatabase.findReservationByShow(
            show_id,
            payload.id
        )
        if(!isAlreadyTicketReservationByShow){
            throw new NotFoundError("Você não reservou nada desse show")
        }
        if (payload.role === USER_ROLES.NORMAL) {
            if(isAlreadyTicketReservationByShow.user_id !== payload.id){
                throw new UnauthorizedError("Sem autorização")
            }
        }

        await this.showDatabase.removeReservationTickets(show_id, payload.id)

        const response: IRemoverTicketsOutputDTO = {
            message: "Reserva do ticket removido"
        }

        return response
    }
}