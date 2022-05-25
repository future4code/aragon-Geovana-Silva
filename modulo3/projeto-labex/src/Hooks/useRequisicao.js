import { useState, useEffect } from "react";
import axios from "axios";

const useRequesicao = (path, initialState) => {
    const [data, setData] = useState(initialState)

const buscarData = () => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/${path}`,
    header)
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        alert(err)
    })
}

useEffect(() => {
    buscarData()
}, [path])

return [data, buscarData];
}

export default useRequesicao;