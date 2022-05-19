import { useState } from 'react';
import PaginaPerfil from './components/PaginaPerfil';
import PaginaMatches from './components/PaginaMatches';
import Header from './components/Header';

export default function App() {
const [pagina, setPagina] = useState("Perfil")

const paginaAtual = () => {
  switch (pagina) {
    case "Perfil":
      return <PaginaPerfil/>
    case "Matches":
      return <PaginaMatches/>
    default:
      return <PaginaPerfil/>
  }
}

const irParaPaginaPerfil = () => {
  setPagina("Perfil")
}

const irParaPaginaMatches = () => {
  setPagina("Matches")
}

return (
  <div>
      <Header 
          pagina={pagina}
          irParaPaginaPerfil={irParaPaginaPerfil}
          irParaPaginaMatches={irParaPaginaMatches}
      />
      <main>
          {paginaAtual()}
      </main>
  </div>
);
};
