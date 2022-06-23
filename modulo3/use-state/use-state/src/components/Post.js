import { useState } from 'react';

export function Post(props) {
  const [inputValue, setInputValue] = useState("")
  const [comentarios, setComentarios] = useState([])
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido), setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setCurtido(!curtido), setNumeroCurtidas(numeroCurtidas + 1);
    };
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const onChangeComentario = (e) => {
    setInputValue(e.target.value)
  }

  const enviarComentario = () => {
    const listaDeComentarios = [...comentarios, inputValue]
    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputValue("")
  }

  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={"comentario"}> Comente: </label>
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button onClick={enviarComentario(inputValue)}> Enviar </button>
    </>
  ) : (
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  );

  return (
    <main>
      <header>
        <figure>
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} width="50" />
          <span> {props.nomeUsuario} </span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'}  width="200" />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          <span> Número de curtidas:{numeroCurtidas} </span>
          <button onClick={onClickCurtida}>
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          <span> Número de comentários:{numeroComentarios} </span>
          <button onClick={onClickComentario}>
            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4> Comentários </h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;