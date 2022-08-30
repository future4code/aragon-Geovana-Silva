import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/Coordinates'
import Erro from '../../Assets/404.png'
import { DivContainer, DivText, Img } from './Styled'

const ErrorPage = () => {
    const Navigate = useNavigate()

    const onClickHome = () => {
        goToHome(Navigate)
    }

    return (
        <>
            <DivContainer >
                <DivText>
                    <h1> Temos um astronauta perdido no espaço! </h1>
                    <p> Infelizmente não localizamos esta página! Retorne para a página inicial. </p>
                    <button onClick={onClickHome}> Página Inicial </button>
                </DivText>
                    <div>
                        <Img src={Erro} alt={"Imagem de erro"} />
                    </div>
            </DivContainer>
        </>
    )

}

export default ErrorPage
