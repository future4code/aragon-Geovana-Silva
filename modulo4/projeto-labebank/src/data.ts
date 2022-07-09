export type Users = {
    id: number,
    name: string,
    CPF: string,
    birth: string,
    paymentList?: Extract,
    balance: number
}

export type Extract = [
    {
        amount: number,
        description: string,
        payday: string
    }
]

export const users:Users[] = [
    {
        id: 1,
        name: "Larissa",
        CPF: "222.222.222-22",
        birth: "22/02/2002",
        paymentList: [{
            amount: 400.00,
            description: "SSD",
            payday: "08/07/2022"
        }],
        balance: 1300.00
    },
    {
        id: 2,
        name: "Ester",
        CPF: "111.111.111-11",
        birth: "12/05/1997",
        paymentList: [{
            amount: 3000.00,
            description: "Notebook",
            payday: "08/07/2022"
        }],
        balance: 12000.00
    },
    {
        id: 3,
        name: "Camila",
        CPF: "333.333.333-33",
        birth: "13/03/1998",
        paymentList: [{
            amount: 35.00,
            description: "Manicure e Pedicure",
            payday: "08/07/2022"
        }],
        balance: 800.00
    }
]