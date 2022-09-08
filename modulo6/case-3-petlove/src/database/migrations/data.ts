import { IUserDB, USER_ROLES } from "../../models/User"
import { DURATION, IWalkDB, STATUS } from "../../models/Walks"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const tours: IWalkDB[] = [
    {
        id: "201",
        status: STATUS.PENDING,
        appointment_date: new Date("2022/09/05"),
        price: 25,
        duration: DURATION.MEIAHORA,
        latitude: -19.931842,
        longitude: -43.938514,
        number_of_pets: 1,
        start_time: "17:00",
        end_time: "17:30"
    },
    {
        id: "202",
        status: STATUS.PENDING,
        appointment_date: new Date("2022/09/04"),
        price: 40,
        duration: DURATION.MEIAHORA,
        latitude: -19.953759,
        longitude: -43.949312,
        number_of_pets: 2,
        start_time: "16:30",
        end_time: "17:00"
    },
    {
        id: "203",
        status: STATUS.INPROGRESS,
        appointment_date: new Date("2022/09/06"),
        price: 55,
        duration: DURATION.HORA,
        latitude: -19.957267,
        longitude: -43.935640,
        number_of_pets: 2,
        start_time: "16:30",
        end_time: "17:30"
    },
    {
        id: "204",
        status: STATUS.CONCLUDED,
        appointment_date: new Date("2022/09/03"),
        price: 75,
        duration: DURATION.HORA,
        latitude: -19.958256,
        longitude: -43.936208,
        number_of_pets: 3,
        start_time: "15:00",
        end_time: "17:00"
    },
]
