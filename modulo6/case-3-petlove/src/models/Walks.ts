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
        private duration: DURATION,
        private latitude: number,
        private longitude: number,
        private number_of_pets: number,
        private start_time: string,
        private end_time: string
    ){
        this.id = id,
        this.status = status,
        this.appointment_date = appointment_date,
        this.price = price,
        this.duration = duration,
        this.latitude = latitude,
        this.longitude = longitude,
        this.number_of_pets = number_of_pets,
        this.start_time = start_time,
        this.end_time = end_time
    }
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
    token: string,
    appointment_date: Date,
    price: number,
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