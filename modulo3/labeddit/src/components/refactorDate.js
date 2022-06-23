const refactorDate = (data) => {
    const dia = data.substring(8, 10)
    const mes = data.substring(5,7)
    const ano = data.substring(0,4)
    return `${dia}/${mes}/${ano}`
}
export default refactorDate