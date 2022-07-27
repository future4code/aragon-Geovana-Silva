export interface IClassromDB {
    id: string,
    name: string,
    module: MODULE
}

export enum MODULE {
    INICIANTE = "0",
    MODULO_1 = "1",
    MODULO_2 = "2",
    MODULO_3 = "3",
    MODULO_4 = "4",
    MODULO_5 = "5",
    MODULO_6 = "6"
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: MODULE
    ) {}

}