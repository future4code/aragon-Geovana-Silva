import React from 'react'

export default class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h1> ETAPA 1 - DADOS GERAIS </h1>
                <label>  1. Qual é o seu nome? </label>
                <input name='Nome'> </input>

                <label> 2. Qual sua idade? </label>
                <input name='Idade'> </input>

                <label> 3. Qual seu email? </label>
                <input name='Email'> </input>

                <label> 4. Qual a sua escolaridade? </label>
                <select name='Escolaridade'>
                    <option value='E-m incompleto'> Ensino médio incompleto </option>
                    <option value="E-m completo"> Ensino médio completo </option>
                    <option value="E-s incompleto"> Ensino superior incompleto </option>
                    <option value="E-s completo"> Ensino superior </option>
                </select>
            </div>
        )
    }
}
