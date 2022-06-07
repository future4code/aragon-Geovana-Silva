import { refactorDate } from "../components/refactorDate"

export default function Cards(props) {
    const posts = props.posts && props.posts.map((post) => {
        return(
            <div key={post.id}>
                <h3> {post.title} </h3>
                <span><b> Autor: </b> {post.userId} </span>
                <p> Criado em {refactorDate(post.createdAt)} </p>
                <img src={`https://picsum.photos/200/300?${post.id}`} alt="Aleatória"/>
                <br/>
                <button> Like </button>
                <br/>
                <button> Dislike </button>
                <p> Comentários: </p>
                <button> Ver comentários </button>
                <hr/>
            </div>
        )
    })

    return(
        <article>
            {posts}
        </article>
    )
}