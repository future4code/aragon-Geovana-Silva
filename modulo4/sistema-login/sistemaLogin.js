const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

//Mínimo 6 caracteres para senha
//Tem que conter o @ no email
//Mostrar senha incorreta em caso de senha !==
//Mostrar email inválido se includes() === true

const login = (email, password) => {
    const iEmail = contas.findIndex(login => login.email == email)
    const iPassword = contas.findIndex(login => login.password == password)

    if (email.includes("@")){
        if (iEmail !== -1){
            if (password.length >= 6){
                if (iPassword !== -1){
                    return `Login realizado com sucesso!`
                }
            } else {
                return `A senha deve possuir no mín. 6 caracteres!`
            }
        } else {
            return `E-mail e/ou senha incorretos!`
        }
    } else {
        return `E-mail inválido.`
    }
}

console.log(login("geovana@email.com", "123456ME"))
console.log(login("astrodev@labenu.com", "abc123"))
console.log(login("laura.dev.com", "deftones"))
console.log(login("kiara@gmail.com", "1234G"))