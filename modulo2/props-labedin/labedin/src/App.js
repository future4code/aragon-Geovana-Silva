import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/D5603AQGrKuyj3I2XYA/profile-displayphoto-shrink_800_800/0/1646405602657?e=1655942400&v=beta&t=I2CIN5e_ocsO3s8ZxZ8ZkpXSwnI64u7toPrcJsNej0I" 
          nome="Geovana Oliveira da Silva" 
          descricao="Oi, eu sou a Geovana. Sou Dev(Elas) persistente e entusiasmada com o aprendizado! Adoro front-end! Quero liberar minha criatividade e empolgação para ver os resultados. Além disso, adoro gatinhos e jogar, faço até streaming nas horas vagas ❤"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271208.png" 
          texto="Ver mais"
        />

      <div className='page-section-container'>
        <CardPequeno
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
          descricao="geovana@gmail.com"
        /> 
        <CardPequeno
          imagem="https://www.jacui.mg.leg.br/imagens/local.png/image"
          descricao="Rua k"
        />

      </div>
      </div>

      <div className= "page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= "https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
          nome= "Labenu" 
          descricao= "Estudante de Desenvolvimento Web Fullstack. Front-end: HTML, CSS e JavaScript; React integração com APIs; Jest; Back-end: Node; Typescript; Express e MySQL; AWS; FireBase;" 
        />
        
        <CardGrande 
          imagem= "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/a0608b947fc9db927db42b2a6f7c7b14" 
          nome= "DASA" 
          descricao= "Empresa do ramo da saúde sendo Assistente de tecnologia no setor de cuidados integrados. Correlacionado ao ser bolsista da escola Labenu." 
        />

        <CardGrande 
          imagem= "https://media.glassdoor.com/sqll/2483878/hospital-felício-rocho-squarelogo-1576666602819.png" 
          nome= "Hospital Felício Rocho" 
          descricao= "Agente de atendimento no setor de medicina diagnóstica por imagens e por passar da experiência, acabei vivenciando vários setores: Oncologia, Ortopedia, Saúde da mulher, Consultórios médicos e entre outros." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          link='https://facebook.com'
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"
          link='https://twitter.com'
        />        
      </div>
    </div>
  );
}

export default App;
