import React from "react";
import styled from "styled-components";

const ImagemGatinho = styled.div`
  width: 350px;
  weight: 350px;
`

export default class App extends React.Component {
  render () {
    return(
      <div>
        <p> Oi, esse projeto será iniciado neste fim de semana ❤ </p>
        <p> Pois a minha desenvolvedora tirou os dias para uma grande revisão!</p>
        <p> Foi um sufoco, haha! Ela estava perdidinha, mas agora vai ser para valer! </p>
        <p> <b> Ela está cansadito :c </b></p>
        <ImagemGatinho>
        <iframe src="https://giphy.com/embed/dT7LBdAZP1Rh6" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bored-cat-sad-dT7LBdAZP1Rh6">via GIPHY</a></p>
        </ImagemGatinho>
        <p> Boa noite! Bom fim de semana e descansem! 😴 </p>
      </div>
    )
  }
}
