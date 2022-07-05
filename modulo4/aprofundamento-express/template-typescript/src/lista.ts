// //2

export type AFAZERES = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const afazeres: AFAZERES[] = [
    {
        userId: 1,
        id: 1,
        title: "Limpar o chão",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Lavar as louças",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Fazer os exercícios.",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Tirar as roupas do varal",
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: "Limpar o banheiro",
        completed: true
    },
    {
        userId: 3,
        id: 6,
        title: "Fazer almoço",
        completed: false
    }
]