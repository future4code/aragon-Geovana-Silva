import { WalkDatabase } from "../database/WalkDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { DURATION, ICreateWalkInputDBDTO, ICreateWalkInputDTO, ICreateWalkOutputDTO, IGetWalksDB, IGetWalksInputDBTO, IGetWalksOutputDTO, IUpdateStatusWithEndTimeInputDTO, IUpdateStatusWithStartTimeInputDTO, IWalkDB, STATUS, Walk } from "../models/Walks";
import { IdGenerator } from "../services/IdGenerator";
import { CalculatePrice } from "../utils/calculatePrice";
import { FormatHours } from "../utils/formatHours"

export class WalkBusiness {
    constructor(
        private walkDatabase: WalkDatabase,
        private idGenerator: IdGenerator,
        private formatHours: FormatHours,
        private calculatePrice: CalculatePrice
    ) { }

    public createWalk = async (input: ICreateWalkInputDTO) => {
        const {
            appointment_date,
            duration,
            latitude,
            longitude,
            number_of_pets,
            start_time,
            end_time 
        } = input

//FAZER O RESTO DAS VALIDAÇÕES

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

        const id: string = this.idGenerator.generate()

        const isStatus: STATUS = STATUS.PENDING

        const startTime: any = this.formatHours.formatStringHours(start_time)
        const endTime: any = this.formatHours.formatStringHours(end_time)
        const isPrice: number = this.calculatePrice.calculatePrice(number_of_pets, duration)

        const walk: ICreateWalkInputDBDTO = {
            id: id,
            status: isStatus,
            appointment_date: appointment_date,
            price: isPrice,
            duration: duration,   
            latitude: latitude,
            longitude: longitude,
            number_of_pets: number_of_pets,
            start_time: startTime,
            end_time: endTime
        }

        // const walk = new Walk (
        //     id,
        //     isStatus,
        //     appointment_date,
        //     isPrice,
        //     duration,
        //     latitude,
        //     longitude,
        //     number_of_pets,
        //     startTime,
        //     endTime
        // )

//NÃO ESTÁ FORMATANDO AS HORAS!!!

        await this.walkDatabase.createWalk(walk)

        const response: ICreateWalkOutputDTO = {
            message: "Walk created successfully!",
            walk: walk
        }

        return response
    }

    public updateStatusWithStartTime = async (input: IUpdateStatusWithStartTimeInputDTO) => {
        const{ id, start_time } = input

        if(start_time.length !== 8){
            throw new RequestError("Enter a valid time!")
        }

        const findWalkId = await this.walkDatabase.getWalkById(id)
        const status = findWalkId.status
        if(status !== STATUS.INPROGRESS){
            throw new ConflictError("Has this tour already started or has it already ended")
        }
        if(!findWalkId){
            throw new NotFoundError("This tour does not exist!")
        }
        if(findWalkId){
            await this.walkDatabase.isStartWalk(start_time, id)
        }
    }

    public updateStatusWithEndTime = async (input: IUpdateStatusWithEndTimeInputDTO) => {
        const { id, end_time } = input

        if(end_time.length !== 8){
            throw new RequestError("Enter a valid time!")
        }

        const findWalkId = await this.walkDatabase.getWalkById(id)
        const status = findWalkId.status

        const duration = Number(findWalkId.duration)
        const startTime = findWalkId.start_time

        const startTimeFormated = this.formatHours.formatStringHours(startTime)
        const endTimeFormated = this.formatHours.formatStringHours(end_time)
        console.log(endTimeFormated - startTimeFormated)

        if(status !== STATUS.PENDING){
            throw new ConflictError("This tour hasn't started yet!")
        }

        if(duration === 30 && (endTimeFormated - startTimeFormated) < (30*60) ){
            throw new RequestError("This tour did not last long!")
        }
        if(duration === 60 && (endTimeFormated - startTimeFormated) < (60*60) ){
            throw new RequestError("This tour did not last long!")
        }
        if(endTimeFormated < startTimeFormated){
            throw new RequestError("There is no way to finish the race before the start time!")
        }
        
        if(!findWalkId){
            throw new NotFoundError("This tour does not exist!")
        }
        if(findWalkId){
            await this.walkDatabase.isStartWalk(end_time, id)
        }
    }

    public getWalks = async (input: IGetWalksInputDBTO): Promise<IGetWalksOutputDTO> => {
        const search = input.search
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getWalksInput: IGetWalksDB = {
            search,
            order,
            sort,
            limit,
            page,
            offset
        }

        const walkDB: IWalkDB[] = await this.walkDatabase.getWalks(getWalksInput)

        const walks = walkDB.map(walkDB => {
            return new Walk(
                walkDB.id,
                walkDB.status,
                walkDB.appointment_date,
                walkDB.price,
                walkDB.duration,
                walkDB.latitude,
                walkDB.longitude,
                walkDB.number_of_pets,
                walkDB.start_time,
                walkDB.end_time
            )
        })

        const response: IGetWalksOutputDTO = {
            tours: walks
        }

        return response
    }
}