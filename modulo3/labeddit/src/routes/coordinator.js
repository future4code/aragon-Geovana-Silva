export const irParaFeed = (navigate) => {
    navigate("/feed")
}

export const irParaDetalhes = (navigate, postId) => {
    navigate(`/post/${postId}`)
}

export const irParaLogin = (navigate) => {
    navigate("/login")
}

export const irParaSignUp = (navigate) => {
    navigate("/singup")
}

export const irParaHeader = (navigate) => {
    navigate("*")
}
