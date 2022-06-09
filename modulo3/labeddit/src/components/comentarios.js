// import { refactorDate } from "./refactorDate"

// export default function Comentarios(props) {
//     const posts = props.comentario ? props.comentario.map((comment) => {
//         return(
//             <div key={comment.id}>
//                 <h3> {comment.body} </h3>
//                 <span><b> Autor: </b> {comment.userId} </span>
//                 <p> Criado em {refactorDate(comment.createdAt)} </p>
//                 <p> Votos: {comment.voteSum ? comment.voteSum : 0} </p>
//                 <button> Dislike </button>
//                 <br/>
//                 <button> Like </button>
//                 <br/>
//             </div>
//         )
//     })

//     return(
//         <article>
//         {posts}
//         </article>
//     )
// }