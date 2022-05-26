const dataAtual = () => {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() > 9 ? `${hoje.getMonth() + 1}` : `0` + (hoje.getMonth() + 1)
    const diaAtual = hoje.getDate() > 9 ? `${hoje.getDate()}` : `0` + hoje.getDate()

return anoAtual + "-" + mesAtual + "-" + diaAtual
}

export default dataAtual;