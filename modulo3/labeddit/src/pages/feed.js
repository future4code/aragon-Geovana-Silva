import Header from "../components/header"
import useProteger from "../hooks/useProteger"

export default function Feed() {
    useProteger()
    return(
        <>
            <main>
                <Header isProtected={true}/>
                <hr/>
                <section>
                    <h2> Crie um novo Post </h2>
                </section>
                <hr/>
                <section>
                    <h2> Lista de Posts </h2>
                </section>
            </main>
        </>
    )
}