import { IProductDB, ITagsDB, ITagsProductsDB } from "../../models/Products"
import { IUserDB, USER_ROLES } from "../../models/User"

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

export const products: IProductDB[] = [
    {
        id: "8371",
        name: "VESTIDO TRICOT CHEVRON"
    },
    {
        id: "8367",
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
    },
    {
        id: "8363",
        name: "VESTIDO CURTO MANGA LONGA LUREX"
    },
    {
        id: "8360",
        name: "VESTIDO FEMININO CANELADO"
    },
    {
        id: "8358",
        name: "VESTIDO REGATA FEMININO COM GOLA"
    },
    {
        id: "8314",
        name: "VESTIDO PLISSADO ACINTURADO"
    },
    {
        id: "8311",
        name: "VESTIDO SLIPDRESS CETIM"
    },
    {
        id: "8310",
        name: "VESTIDO CURTO PONTO ROMA MANGA"
    },
    {
        id: "8309",
        name: "VESTIDO MOLETOM COM CAPUZ"
    },
    {
        id: "8301",
        name: "VESTIDO LONGO CREPE MANGA COMPRIDA"
    },
    {
        id: "8300",
        name: "VESTIDO MALHA COM FENDA"
    },
    {
        id: "8293",
        name: "VESTIDO CURTO VELUDO RECORTE GOLA"
    },
    {
        id: "8291",
        name: "VESTIDO MANGA COMPRIDA COSTAS"
    },
    {
        id: "8264",
        name: "VESTIDO CURTO VELUDO CRISTAL"
    },
    {
        id: "8119",
        name: "VESTIDO BABADOS KNIT"
    },
    {
        id: "8110",
        name: "VESTIDO CUT OUT TRICOT"
    },
    {
        id: "8109",
        name: "VESTIDO BABADOS HORIZONTAIS"
    },
    {
        id: "8104",
        name: "VESTIDO BABADO TURTLENECK"
    },
    {
        id: "8091",
        name: "VESTIDO MIDI VELUDO DECOTADO"
    },
    {
        id: "8083",
        name: "VESTIDO LONGO ESTAMPADO"
    },
    {
        id: "8080",
        name: "VESTIDO CURTO RENDA VISCOSE"
    },
    {
        id: "7613",
        name: "VESTIDO LONGO BABADO"
    },
    {
        id: "7533",
        name: "VESTIDO COTTON DOUBLE"
    },
    {
        id: "7518",
        name: "VESTIDO CAMISETA FANCY"
    },
    {
        id: "7516",
        name: "VESTIDO WRAP FLEUR"
    }
]

export const tags: ITagsDB[] = [
    {
        id: "000101",
        name: "casual"
    },
    {
        id: "000102",
        name: "metal"
    },
    {
        id: "000103",
        name: "delicado"
    },
    {
        id: "000104",
        name: "neutro"
    },
    {
        id: "000105",
        name: "basics"
    },
    {
        id: "000107",
        name: "inverno"
    },
    {
        id: "000108",
        name: "viagem"
    },
    {
        id: "000109",
        name: "liso"
    },
    {
        id: "000110",
        name: "balada"
    },
    {
        id: "000111",
        name: "moderno"
    },
    {
        id: "000112",
        name: "descolado"
    },
    {
        id: "000113",
        name: "workwaer"
    },
    {
        id: "000114",
        name: "elastano"
    },
    {
        id: "000115",
        name: "couro"
    },
    {
        id: "000116",
        name: "estampado"
    },
    {
        id: "000117",
        name: "passeio"
    },
    {
        id: "000118",
        name: "colorido"
    },
    {
        id: "000119",
        name: "boho"
    },
    {
        id: "000120",
        name: "veludo"
    },
    {
        id: "000121",
        name: "inverno"
    },
    {
        id: "000122",
        name: "festa"
    }
]

export const tagsProducts: ITagsProductsDB[] = [
    {
        id: '201',
        product_id: '8371',
        tag_id: '110'
    },
    {
        id: '202',
        product_id: '8371',
        tag_id: '104'
    },
    {
        id: '203',
        product_id: '8371',
        tag_id: '103'
    },
    {
        id: '204',
        product_id: '8371',
        tag_id: '122'
    },
    {
        id: '205',
        product_id: '8367',
        tag_id: '101'
    },
    {
        id: '206',
        product_id: '8367',
        tag_id: '102',
    },
    {
        id: '207',
        product_id: '8363',
        tag_id: '118'
    },
    {
        id: '208',
        product_id: '8363',
        tag_id: '102'
    },
    {
        id: '209',
        product_id: '8363',
        tag_id: '103'
    },
    {
        id: '210',
        product_id: '8363',
        tag_id: '117'
    },
    {
        id: '211',
        product_id: '8363',
        tag_id: '118'
    },
    {
        id: '212',
        product_id: '8360',
        tag_id: '119'
    },
    {
        id: '213',
        product_id: '8360',
        tag_id: '120'
    },
    {
        id: '214',
        product_id: '8360',
        tag_id: '121'
    },
    {
        id: '215',
        product_id: '8358',
        tag_id: '122'
    },
    {
        id: '216',
        product_id: '8358',
        tag_id: '101'
    },
    {
        id: '217',
        product_id: '8358',
        tag_id: '102'
    },
    {
        id: '218',
        product_id: '8358',
        tag_id: '103'
    },
    {
        id: '219',
        product_id: '8314',
        tag_id: '104'
    },
    {
        id: '220',
        product_id: '8314',
        tag_id: '105'
    },
    {
        id: '221',
        product_id: '8314',
        tag_id: '106',
    },
    {
        id: '222',
        product_id: '8311',
        tag_id: '107'
    },
    {
        id: '223',
        product_id: '8311',
        tag_id: '108'
    },
    {
        id: '224',
        product_id: '8311',
        tag_id: '109'
    },
    {
        id: '225',
        product_id: '8311',
        tag_id: '110'
    },
    {
        id: '226',
        product_id: '8311',
        tag_id: '111'
    },
    {
        id: '227',
        product_id: '8310',
        tag_id: '112'
    },
    {
        id: '228',
        product_id: '8310',
        tag_id: '113'
    },
    {
        id: '229',
        product_id: '8310',
        tag_id: '114'
    },
    {
        id: '230',
        product_id: '8310',
        tag_id: '115'
    },
    {
        id: '231',
        product_id: '8310',
        tag_id: '116'
    },
    {
        id: '232',
        product_id: '8310',
        tag_id: '117'
    },
    {
        id: '233',
        product_id: '8309',
        tag_id: '118'
    },
    {
        id: '234',
        product_id: '8309',
        tag_id: '119'
    },
    {
        id: '235',
        product_id: '8309',
        tag_id: '120'
    },
    {
        id: '236',
        product_id: '8309',
        tag_id: '121'
    },
    {
        id: '237',
        product_id: '8301',
        tag_id: '122'
    }
]