import Header from "../components/Header";

export default function Home() {
    return(
        <div>
            <Header paginaAtual={"home-page"}/>
            <hr/>
            <main>
                <section>
                    <h3> Inscreva-se numa nova viagem!🧳 </h3>
                </section>
                <hr/>
                <section>
                    <h3> Lista de viagens🛫 </h3>
                </section>
            </main>
        </div>
    )
}