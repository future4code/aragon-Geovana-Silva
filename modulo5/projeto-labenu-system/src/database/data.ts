import { IClassroomDB } from "../models/Classroom";
import { IHobbiesDB, IStudentsDB, IStudentsHobbiesDB } from "../models/Students";

export const classrooms: IClassroomDB[] = [
    {
        id: "01",
        name: "Aragon",
        module: "5"
    },
    {
        id: "02",
        name: "Hooks",
        module: "6"
    },
    {
        id: "03",
        name: "Moreira",
        module: "3"
    },
    {
        id: "04",
        name: "Barbosa",
        module: null
    }
]

export const students: IStudentsDB[] = [
    {
        id: "21",
        name: "Geovana",
        email: "geovana@gmail.com",
        birthdate: new Date("2001/04/22"),
        classroom_id: "01"
    },
    {
        id: "22",
        name: "Laura",
        email: "laura@email.com",
        birthdate: new Date("1998/03/28"),
        classroom_id: "03"
    },
    {
        id: "23",
        name: "Poliana",
        email: "polly@hotmail.com",
        birthdate: new Date("2002/08/07"),
        classroom_id: "02"
    },
    {
        id: "24",
        name: "Clarissa",
        email: "clarissa@outlook.com",
        birthdate: new Date("1995/02/03"),
        classroom_id: "02"
    },
    {
        id: "25",
        name: "Denilson",
        email: "denilson@gmail.com",
        birthdate: new Date("1999/12/01"),
        classroom_id: null
    }
]

export const hobbies: IHobbiesDB[] = [
    {
        id: "31",
        title: "Jogar video game"
    },
    {
        id: "32",
        title: "Assistir séries"
    },
    {
        id: "33",
        title: "Ver estrelas com o telescópio"
    },
    {
        id: "34",
        title: "Ler HQs"
    },
    {
        id: "35",
        title: "Fazer compras"
    }
]

export const studentsHobbies: IStudentsHobbiesDB[] = [
    {
        student_id: "21",
        hobby_id: "33"
    },
    {
        student_id: "22",
        hobby_id: "35"
    },
    {
        student_id: "23",
        hobby_id: "31"
    },
    {
        student_id: "24",
        hobby_id: "32"
    },
    {
        student_id: "25",
        hobby_id: "34"
    }
]