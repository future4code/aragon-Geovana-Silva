export interface IClassroomDB {
    id: string,
    name: string,
    module: string | null
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private module: string | null
    ) {}
    
    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getModule() {
        return this.module
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setModule(newModule: string | null) {
        this.module = newModule
    }
}