import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ICreateShowInputDBTO, IShowDB } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createShow =  async (show: ICreateShowInputDBTO) => {

    }

    public findShowByDate = async (date: Date): Promise <IShowDB | undefined> => {
        switch(date.getDate()){
            case 5:
                return {
                    id: "id-astrodev",
                    band: "banda-mock",
                    starts_at: new Date("2022/12/05")
                } as IShowDB
            default:
                return undefined
        }
    }
}