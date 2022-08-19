import { ICreateShowInputDBTO, IShowDB, ITicketDB } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"
import { tickets } from "./migrations/data"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public createShow =  async (show: ICreateShowInputDBTO) => {
        const showDB: ICreateShowInputDBTO = {
            id: show.id,
            band: show.band,
            starts_at: show.starts_at
        }

        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public findShowByDate = async (date: Date): Promise <IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ starts_at: date })
        return result[0]
    }

    public getShows = async () => {
        const showDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
        return showDB
    }

    public getTickets = async (showId: string) => {
        const result: any = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .count(5000, "-", "id AS tickets")
            .where({ showId: showId })
            return result[0].tickets as number
    }

    public findShowById = async (showId: string) => {
        const showDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ id: showId })
        return showDB[0]
    }

    public reservationTickets = async (ticketsDB: ITicketDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(ticketsDB)
    }

    public findReservationByShow = async (showId: string, userId: string) => {
        const ticketDB: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })
        return ticketDB[0]
    }

    public removeReservationTickets = async (showId: string, userId: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })
    }
}