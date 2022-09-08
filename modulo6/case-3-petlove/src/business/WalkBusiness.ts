import { WalkDatabase } from "../database/WalkDatabase";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { DURATION, ICreateWalkInputDBDTO, ICreateWalkInputDTO, IWalkDB, STATUS, Walk } from "../models/Walks";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { CalculatePrice } from "../utils/calculatePrice";
import { FormatHours } from "../utils/formatHours"

export class WalkBusiness {
    constructor(
        private walkDatabase: WalkDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private formatHours: FormatHours,
        private calculatePrice: CalculatePrice
    ) { }

    public createWalk = async (input: ICreateWalkInputDTO) => {
        const {
            token,
            appointment_date,
            price,
            duration,
            latitude,
            longitude,
            number_of_pets,
            start_time,
            end_time } = input

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new UnauthorizedError("Invalid or missing token")
        }

        if(start_time === end_time){
            throw new RequestError("The start time cannot be the same as the end time!")
        }

        if(start_time > end_time){
            throw new RequestError("Start time cannot be greater than end time")
        }

        if(end_time.length !== 8 || start_time.length !== 8){
            throw new RequestError("Enter a valid time")
        }

        if(duration !== DURATION.HORA && duration !== DURATION.MEIAHORA){
            throw new RequestError("This duration time is invalid!")
        }

        const id = this.idGenerator.generate()

        const date = new Date(appointment_date)

        const status = STATUS.PENDING

        const startTime = this.formatHours.formatStringHours(start_time)
        const endTime = this.formatHours.formatStringHours(end_time)
        const isPrice = this.calculatePrice.calculatePrice(number_of_pets, duration)}

        const walk: ICreateWalkInputDBDTO = {
            id,
            status,
            date,
            isPrice,

        }
    }
}