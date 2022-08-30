import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const DivText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: -200px;
h1{
    font-size: 60px;
    color: #2E318A;
}
p{
    width: 70%;
    font-size: 25px;
}
button{
    color: #fff;
    background-color: #2E318A;
    height:40px;
    width: 200px;
    border-radius: 8px;
    font-size: 18px;
    border: none;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
}
}
`
export const Img = styled.img`
    width: 650px;
    margin-top: 15%;
`