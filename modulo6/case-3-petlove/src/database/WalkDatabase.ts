import { ICreateWalkInputDBDTO, IGetWalksDB, IWalkDB} from "../models/Walks";
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

    public isStartWalk = async (start: string, id: string): Promise<undefined> => {
        const result = await BaseDatabase.connection.raw(`
            UPDATE PetLove_Walks
            SET start_time = '${start}',
            status = "INPROGRESS"
            WHERE id = '${id}'
        `);

        return result[0]
    }

    public isEndWalk = async (end: string, id: string): Promise<undefined> => {
        const result = await BaseDatabase.connection.raw(`
            UPDATE PetLove_Walks
            SET end_time = '${end}',
            status = "CONCLUDED"
            WHERE id = '${id}'
        `);

        return result[0]
    }

    public getWalks = async (input: IGetWalksDB): Promise<IWalkDB[] | undefined> => {
        const {
            search,
            order,
            sort,
            limit,
            offset
        } = input
        
        const result: IWalkDB[] = await BaseDatabase
            .connection(WalkDatabase.TABLE_WALKS)
            .select()
            .where(`id`, `LIKE`, `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return result
    }

    public getWalkById = async (id: string): Promise<IWalkDB | undefined> => {
        const [result] = await BaseDatabase
            .connection(WalkDatabase.TABLE_WALKS)
            .select()
            .where(`id`, `LIKE`, `${id}`)
            

        return result
    }
}