export enum STATUS {
    PENDING = "PENDING",
    INPROGRESS = "INPROGRESS",
    CONCLUDED = "CONCLUDED"
}

export enum DURATION {
    MEIAHORA = "30",
    HORA = "60"
}

export interface IWalkDB {
    id: string,
    status: STATUS,
    appointment_date: Date,
    price: number,
    duration: DURATION,
    latitude: number,
    longitude: number,
    number_of_pets: number,
    start_time: string,
    end_time: string
}

export class Walk {
    constructor(
        private id: string,
        private status: STATUS,
        private appointment_date: Date,
        private price: number,
        private duration: string,
        private latitude: number,
        private longitude: number,
        private number_of_pets: number,
        private start_time: string,
        private end_time: string
    ){}

    public getId() {
        return this.id
    }

    public getStatus() {
        return this.status
    }

    public getAppointmentDate() {
        return this.appointment_date
    }

    public getPrice() {
        return this.price
    }

    public getDuration() {
        return this.duration
    }

    public getLatitude() {
        return this.latitude
    }

    public getLongitude() {
        return this.longitude
    }

    public getNumberOfPets() {
        return this.number_of_pets
    }

    public getStartTime() {
        return this.start_time
    }

    public getEndTime() {
        return this.end_time
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setStatus = (newStatus: STATUS) => {
        this.status = newStatus
    }

    public setAppointmentDate = (newAppointmentDate: Date) => {
        this.appointment_date = newAppointmentDate
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setDuration = (newDuration: DURATION) => {
        this.duration = newDuration
    }

    public setLatitude = (newLatitude: number) => {
        this.latitude = newLatitude
    }

    public setLongitude = (newLongitude: number) => {
        this.longitude = newLongitude
    }

    public setNumberOfPets = (newNumberOfPets: number) => {
        this.number_of_pets = newNumberOfPets
    }

    public setStartTime = (newStartTime: string) => {
        this.start_time = newStartTime
    }

    public setEndTime = (newEndTime: string) => {
        this.end_time = newEndTime
    }
}

export interface ICreateWalkInputDTO {
    appointment_date: Date,
    duration: DURATION,
    latitude: number,
    longitude: number,
    number_of_pets: number,
    start_time: string,
    end_time: string
}

export interface ICreateWalkInputDBDTO {
    id: string,
    status: STATUS,
    appointment_date: Date,
    price: number,
    duration: DURATION,
    latitude: number,
    longitude: number,
    number_of_pets: number,
    start_time: string,
    end_time: string
}

export interface ICreateWalkOutputDTO {
    message: string,
    walk: ICreateWalkInputDBDTO
}

export interface IGetWalksOutputDTO {
    tours: Walk[]
}

export interface IGetWalksDB {
    search: string,
    order: string,
    sort: string,
    limit: number,
    page: number,
    offset: number
}

export interface IGetWalksInputDBTO {
    search: string,
    order: string,
    sort:  string,
    limit: string,
    page: string
} 


export interface IUpdateStatusWithStartTimeInputDTO {
    id: string,
    start_time: string
}

export interface IUpdateStatusWithEndTimeInputDTO {
    id: string,
    end_time: string
}