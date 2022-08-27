export interface IProductDB {
    id: string,
    name: string
}

export interface ITagsDB {
    id: string,
    tag: string
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string[] = []
    ) {}

    public getId = () => {
        return this.id
    } 

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = [...newTag]
    }
}

export interface ICreateProductInputDTO {
    token: string,
    name: string,
    tags: string[]
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Product
}

export interface IGetProductsOutput {
    product: Product[]
}

export interface IGetProductsDB {
    order: string,
    sort: string,
    limit: number,
    page: number,
    offset: number
}

export interface IGetProductsInputDBTO {
    order: string,
    sort:  string,
    limit: string,
    page: string
}