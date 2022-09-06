export enum STATUS {
    PENDING = "PENDING",
    INPROGRESS = "IN PROGRESS",
    CONCLUDED = "CONCLUDED"
}

export enum DURATION {
    MEIAHORA = "30",
    HORA = "60",
}

export interface IWalkDB {
    id: string,
    status: STATUS,
    appointment_date: string,
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
        private appointment_date: string,
        private price: number,
        private duration: string,
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
}