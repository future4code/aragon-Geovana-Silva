import { ICreateWalkInputDBDTO, ICreateWalkInputDTO, IWalkDB, Walk } from "../models/Walks";
import { BaseDatabase } from "./BaseDatabase";

export class WalkDatabase extends BaseDatabase {
    public static TABLE_WALKS = "PetLove_Walks"

    public createWalk = async (walk: ICreateWalkInputDBDTO): Promise<void> => {
        const walkDB: ICreateWalkInputDBDTO = {
            id: walk.id,
            status: walk.status,
            appointment_date: walk.appointment_date,
            price: walk.price,
            duration: walk.duration,
            latitude: walk.latitude,
            longitude: walk.longitude,
            number_of_pets: walk.number_of_pets,
            start_time: walk.start_time,
            end_time: walk.end_time
        }

        await BaseDatabase
            .connection(WalkDatabase.TABLE_WALKS)
            .insert(walkDB)
    }
}