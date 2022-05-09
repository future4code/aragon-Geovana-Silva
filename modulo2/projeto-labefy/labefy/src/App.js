import React from "react";
import axios from "axios";
import styled from "styled-components";

const Cardplaylist = styled.div`
    margin: 20px;
    color: #990024;
    button {
        margin: 10px;
        border-radius: 20px;
        border: none;
        background-color: #FF003D;
        color: #fff;
    } button: hover {
        background-color: #990024;
        color: #fff;
    }
`

const CardList = styled.div`
    h1 {
        color: #990024;
    } h3 {
        color: #990024;
    } input {
        border-radius: 20px;
        border-width: 1px;
        border-color: #FF003D;
        padding: 3px;
    } button {
        margin: 10px;
        border-radius: 20px;
        border: none;
        background-color: #FF003D;
        color: #fff;
    } button: hover {
        background-color: #990024;
        color: #fff;
    }
`

export default class App extends React.Component {
state = {
    playlists: [],
    nomeInput: ""
}

onChangeInput = (e) => {
    this.setState({nomeInput: e.target.value})
}

componentDidMount() {
    this.getPlaylists()
    this.searchPlaylist()
}

getPlaylists = () => {
axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
{
    headers: {
    Authorization: "geovana-oliveira-aragon"
}
})
.then((res) => {
    this.setState({playlists: res.data.result.list});
})
.catch((err) => {
    console.log("Erro! :c");
})
}

createPlaylist = () => {
const body = {
    name: this.state.nomeInput
}
axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
{
    headers: {
        Authorization: "geovana-oliveira-aragon"
    }
}
)
.then((res) => {
    this.getPlaylists()
})
.catch((err) => {
    console.log("Erro! :c")
})
}

searchPlaylist = async() => {
const link = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
try {
    const res = await axios.get(link, {
        headers: {
            Authorization: "geovana-oliveira-aragon"
        }
    })
    this.setState({playlists: res.data})
} catch (err) {
    alert("Erro! :c")
}
}

deletePlaylist = (id) => {
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(link, {
        headers: {
            Authorization: "geovana-oliveira-aragon"
        }
    })
        .then((res) => {
            alert("Playlist deletada com sucesso!")
            this.searchPlaylist()
        })
        .catch((err) => {
            alert("Erro! :c")
        })
}

render () {
    const listaPlaylist = this.state.playlists.map((playlist) => {
        return ( 
            <Cardplaylist key={playlist.id}>
            <b>{playlist.name}</b>
            <button onClick={() => this.deletePlaylist(playlist.id)}><b> X </b></button>
            <hr/>
            </Cardplaylist>
        )
        })
return(
<CardList>
    <main>
        <h1> Labefy </h1>
        <h3> Ouça suas músicas em qualquer lugar! </h3>
        <hr/>
        <section>
            <label>
                <input value={this.state.nomeInput} onChange={this.onChangeInput} placeholder="Nome da playlist"/>
            </label>
            <button onClick={this.createPlaylist}><b> Criar playlist </b></button>
        </section>
        <section>
            {listaPlaylist}
        </section>
    </main>
</CardList>
)}}
