import React from 'react'

export default class Etapa2 extends React.Component {
    render () {
        return (
            <div>
                <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h1>
                <label> Qual é o seu curso? </label>
                <input name='curso'> </input>

                <label> Qual a sua unidade de ensino? </label>
                <input name='unidade'> </input>
            </div>
        )
    }
}
